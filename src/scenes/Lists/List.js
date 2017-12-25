import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DeleteIcon from 'react-icons/lib/md/clear'
import Card from 'ui/Card'
import Item from './Item'
import NewItem from './NewItem'

const Wrapper = styled(Card)`
  & + & {
    margin-top: 12px;
  }
`

const Name = styled.div`
  text-transform: uppercase;
  padding: 12px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);
  position: relative;

  svg {
    opacity: .54;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const List = ({ id, name, data, mutate }) => {
  const isLoading = data.loading

  if (isLoading) {
    return null
  }

  return (
    <Wrapper>
      <Name>
        <span>{name}</span>
        <DeleteIcon onClick={() => mutate({ variables: { id } })} />
      </Name>
      <ul>
        {data.list.items.map(x => <Item key={x.id} {...x} />)}
      </ul>
      <NewItem listId={id} />
    </Wrapper>
  )
}

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    list: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          done: PropTypes.bool.isRequired
        })
      ).isRequired
    })
  }).isRequired,
  mutate: PropTypes.func.isRequired
}

export default compose(
  graphql(
    gql`
      query ListQuery ($id: Int) {
        list (id: $id) {
          items {
            id,
            text,
            done
          }
        }
      }
  `,
    {
      options: ({ id }) => ({
        variables: { id }
      })
    }
  ),
  graphql(
    gql`
      mutation deleteList($id: Int) {
        deleteList(id: $id) {
          id
        }
      }
    `,
    {
      options: {
        refetchQueries: ['ListsQuery']
      }
    }
  )
)(List)
