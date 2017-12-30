import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from 'react-icons/lib/md/clear'
import Editable from 'components/Editable'
import Card from 'ui/Card'
import Item from './Item'
import NewItem from './NewItem'

export default function List ({ id, data, updateList, deleteList }) {
  const isLoading = data.loading

  if (isLoading) {
    return null
  }

  return (
    <Wrapper>
      <Name>
        <Editable
          onChange={value =>
            updateList({
              variables: {
                input: { id, name: value }
              }
            })}
        >
          {data.list.name}
        </Editable>
        <DeleteIcon
          onClick={() =>
            deleteList({
              variables: {
                input: { id }
              }
            })}
        />
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
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    list: PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          done: PropTypes.bool.isRequired
        })
      ).isRequired
    })
  }).isRequired,
  updateList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired
}

const Wrapper = styled(Card)`
`

const Name = styled.div`
  text-transform: uppercase;
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, .15);
  position: relative;

  svg {
    opacity: .24;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`
