import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from 'react-icons/lib/md/delete'
import ExpandableMenu, { MenuItem } from 'ui/ExpandableMenu'

export default function Item ({ title, link, source, sourceId, deleteSource }) {
  return (
    <Container>
      <div flex>
        <Link href={link} target='_blank'>
          <span>{title}</span>
          <ItemMeta>{source}</ItemMeta>
        </Link>
      </div>
      <Menu
        renderItems={() => (
          <div>
            <MenuItem onClick={deleteSource}>
              <DeleteIcon /><span>Delete source</span>
            </MenuItem>
          </div>
        )}
      />
    </Container>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceId: PropTypes.number.isRequired,
  deleteSource: PropTypes.func.isRequired
}

const Container = styled.div`
  display: flex;
`

const Link = styled.a`
  box-sizing: border-box;
  padding: 12px;
  display: block;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  span {
    display: block;
  }
`

const ItemMeta = styled.span`
  font-size: 80%;
  opacity: .54;
`

const Menu = styled(ExpandableMenu)`
  svg {
    opacity: .54;
  }
`
