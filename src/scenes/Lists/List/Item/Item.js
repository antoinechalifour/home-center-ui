import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TodoIcon from 'react-icons/lib/md/check-box-outline-blank'
import DoneIcon from 'react-icons/lib/md/check-box'
import DeleteIcon from 'react-icons/lib/md/clear'

export default function Item ({
  id,
  text,
  done,
  updateListItem,
  deleteListItem
}) {
  const toggleStatus = () =>
    updateListItem({ variables: { id, text, done: !done } })
  const CheckboxIcon = done ? DoneIcon : TodoIcon

  return (
    <Wrapper checked={done}>
      <CheckboxIcon onClick={toggleStatus} />
      <span>{text}</span>
      <DeleteIcon onClick={() => deleteListItem({ variables: { id } })} />
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;

  svg {
    margin-right: 12px;
    font-size: 20px;
    cursor: pointer;
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

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateListItem: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired
}
