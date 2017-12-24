import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Card, * as card from 'ui/Card'
import Section, * as section from 'Home/Section'

const Feed = styled.ul`
  padding: 12px;
  display: flex;

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

const ItemTitle = styled.span`
`

const ItemMeta = styled.span`
  font-size: 80%;
  opacity: .54;
`

const Rss = ({ data }) => {
  return (
    <Section>
      <section.Title>News</section.Title>
      <section.Content>
        {data.loading && <section.Loader />}
        {data.feed &&
          <Feed>
            {data.feed.map(({ title, link, date, source }) => (
              <Item key={title}>
                <Card>
                  <card.Content>
                    <ItemLink href={link} target='_blank' rel='noopener'>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemMeta>{source}</ItemMeta>
                    </ItemLink>
                  </card.Content>
                </Card>
              </Item>
            ))}
          </Feed>}
      </section.Content>
    </Section>
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

export default graphql(
  gql`
  query RssQuery {
    feed {
      title,
      link,
      date,
      source
    }
  }
`
)(Rss)
