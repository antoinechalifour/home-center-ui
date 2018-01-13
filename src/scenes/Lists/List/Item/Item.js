import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TodoIcon from 'react-icons/lib/md/check-box-outline-blank'
import DoneIcon from 'react-icons/lib/md/check-box'
import DeleteIcon from 'react-icons/lib/md/clear'
import Editable from 'components/Editable'

export default function Item ({
  text,
  done,
  updateText,
  toggleStatus,
  deleteItem
}) {
  const CheckboxIcon = done ? DoneIcon : TodoIcon

  return (
    <Wrapper checked={done}>
      <CheckboxIcon onClick={toggleStatus} />
      <Editable onChange={updateText}>{text}</Editable>
      <DeleteIcon onClick={deleteItem} />
    </Wrapper>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateText: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 12px;

  svg {
    cursor: pointer;
  }

  svg:first-child {
    margin-right: 12px;
    opacity: .33;
    font-size: 125%;
  }

  span {
    flex: 1;
    ${({ checked }) => checked && 'text-decoration: line-through;'}
    ${({ checked }) => checked && 'opacity: .54;'}
  }

  svg:last-child {
    margin-left: 12px;
    opacity: .24;
  }
`
