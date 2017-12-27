import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card, * as card from 'ui/Card'
import Loader from 'ui/Loader'
import Col from 'ui/Col'

export default function Rss ({ data }) {
  return (
    <Col align='center'>
      {data.loading && <Loader />}
      {data.feed &&
        <Feed>
          {data.feed.map(({ title, link, date, source }) => (
            <Item key={title}>
              <Card>
                <card.Content>
                  <ItemLink href={link} target='_blank' rel='noopener'>
                    <span>{title}</span>
                    <ItemMeta>{source}</ItemMeta>
                  </ItemLink>
                </card.Content>
              </Card>
            </Item>
          ))}
        </Feed>}
    </Col>
  )
}

Rss.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    feed: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired
      })
    )
  }).isRequired
}

const Feed = styled.ul`
  display: flex;
  width: 100%;

  @media (min-width: 860px) {
    flex-direction: column;
  }
`

const Item = styled.li`
  flex: 0 0 90%;

  & + & {
    margin-left: 12px;
    margin-right: 12px;
  }

  @media (min-width: 860px) {
    & + & {
      margin-left: 0;
      margin-right: 0;
      margin-top: 8px;
    }
  }
`

const ItemLink = styled.a`
  display: block;
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
