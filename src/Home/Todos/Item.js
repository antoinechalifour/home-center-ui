import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import TodoIcon from 'react-icons/lib/md/check-box-outline-blank'
import DoneIcon from 'react-icons/lib/md/check-box'
import DeleteIcon from 'react-icons/lib/md/clear'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  svg {
    margin-right: 12px;
    font-size: 20px;
  }

  span {
    flex: 1;
    ${({ checked }) => checked && 'text-decoration: line-through;'}
    ${({ checked }) => checked && 'opacity: .54;'}
  }

  span + svg {
    margin-right: 0;
    opacity: .54;
  }

  + li {
    border-top: 1px solid rgba(0, 0, 0, .15);
  }
`

const Item = ({ id, text, done, updateListItem, deleteListItem }) => (
  <Wrapper
    checked={done}
    onClick={() => updateListItem({ variables: { id, text, done: !done } })}
  >
    {done ? <DoneIcon /> : <TodoIcon />}
    <span>{text}</span>
    <DeleteIcon onClick={() => deleteListItem({ variables: { id } })} />
  </Wrapper>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateListItem: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired
}

export default compose(
  graphql(
    gql`
      mutation updateListItem ($id: Int, $text: String, $done: Boolean) {
        updateListItem(id: $id, text: $text, done: $done) {
          id
        }
      }
    `,
    {
      name: 'updateListItem',
      options: {
        refetchQueries: ['ListQuery']
      }
    }
  ),
  graphql(
    gql`
      mutation deleteListItem ($id: Int) {
        deleteListItem(id: $id) {
          id
        }
      }
    `,
    {
      name: 'deleteListItem',
      options: {
        refetchQueries: ['ListQuery']
      }
    }
  )
)(Item)
