import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'ui/Card'
import Loader from 'ui/Loader'
import Col from 'ui/Col'

export default function Rss ({ data }) {
  return (
    <Col align='center'>
      {data.loading && <Loader />}
      {data.feed &&
        <Container>
          <Feed>
            {data.feed.map(({ title, link, date, source }) => (
              <Item key={title}>
                <ItemLink href={link} target='_blank' rel='noopener'>
                  <span>{title}</span>
                  <ItemMeta>{source}</ItemMeta>
                </ItemLink>
              </Item>
            ))}
          </Feed>
        </Container>}
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

const Container = styled(Card)`
  width: 100%;
`

const Feed = styled.ul`
  display: flex;
  width: 95%;
  overflow-x: auto;

  @media (min-width: 860px) {
    width: auto;
    flex-direction: column;
  }
`

const Item = styled.li`
  flex: 0 0 100%;
  padding: 12px;

  & + & {
    border-left: 1px solid rgba(0, 0, 0, .05);
  }

  @media (min-width: 860px) {
    flex: 1;

    & + & {
      border-left: none;
      border-top: 1px solid rgba(0, 0, 0, .05);
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
