import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from 'react-icons/lib/md/clear'
import Editable from 'components/Editable'
import gqlLoaderHoc from 'components/GqlLoader'
import Item from './Item'
import NewItem from './NewItem'

export function List ({ id, data, updateName, deleteList }) {
  return (
    <Container>
      <Name>
        <Editable onChange={updateName}>
          {data.list.name}
        </Editable>
        <DeleteIcon onClick={deleteList} />
      </Name>
      <ul>
        {data.list.items.map(x => <Item key={x.id} {...x} />)}
      </ul>
      <NewItem listId={id} />
    </Container>
  )
}

List.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
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
  updateName: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired
}

export default gqlLoaderHoc(List)

const Container = styled.div`
  ul {
    border-left: 2px solid rgba(255, 255, 255, .33);
  }
`

const Name = styled.div`
  text-transform: uppercase;
  padding: 8px 12px;
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
