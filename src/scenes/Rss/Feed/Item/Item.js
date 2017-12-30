import React from 'react'
import styled from 'styled-components'
import Row from 'ui/Row'
import DeleteIcon from 'react-icons/lib/md/delete'
import ExpandableMenu, { MenuItem } from 'ui/ExpandableMenu'

export default function Item ({
  title,
  source,
  sourceId,
  deleteSource,
  content
}) {
  return (
    <Wrapper>
      <Link>
        <ItemHeader>
          <Row>
            <div flex>
              <span>{title}</span>
              <ItemMeta>{source}</ItemMeta>
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
          </Row>
        </ItemHeader>
        <ItemPreview dangerouslySetInnerHTML={{ __html: content }} />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  box-sizing: border-box;
  padding: 12px;
`

const Link = styled.a`
  display: block;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  span {
    display: block;
  }
`

const ItemHeader = styled.span`
  margin-bottom: 16px;
`

const ItemPreview = styled.span`
  img {
    width: 100%;
    display: block;
    margin: auto;
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
