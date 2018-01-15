import React from 'react'
import styled from 'styled-components'
import gqlLoaderHoc from 'components/GqlLoader'

const renderers = {
  'light.brightness': ({ type, data }) => (
    <div>Brighness of  light "{data.name}"" has been set to {data.bri}%</div>
  ),
  'light.information': ({ type, data }) => (
    <div>Light has been renamed to "{data.name}"</div>
  ),
  'light.status': ({ type, data }) => (
    <div>Light "{data.name}" has been turned {data.status}</div>
  ),
  'list.created': ({ type, data }) => (
    <div>List "{data.name}" has been created.</div>
  ),
  'list.updated': ({ type, data }) => (
    <div>List has been renamed to "{data.name}"</div>
  ),
  'list.deleted': ({ type, data }) => (
    <div>List "{data.name}" has been deleted</div>
  ),
  'list.item.created': ({ type, data }) => (
    <div>List item "{data.text}" has been created</div>
  ),
  'list.item.updated': ({ type, data }) => (
    <div>List item "{data.text}" has been updated</div>
  ),
  'list.item.deleted': ({ type, data }) => (
    <div>List item "{data.text}" has been deleted</div>
  ),
  'list.item.status': ({ type, data }) => (
    <div>
      List item "{data.text}" is now {data.done ? 'completed' : 'to do'}.
    </div>
  )
}

function History ({ data }) {
  return (
    <Container>
      <div>
        <Events>
          {data.events.map(x => (
            <Event key={x.id}>
              <div />
              {renderers[x.type]
                ? renderers[x.type]({ ...x, data: JSON.parse(x.payload) })
                : <div>{x.type}</div>}
            </Event>
          ))}
        </Events>
      </div>
    </Container>
  )
}

export default gqlLoaderHoc(History)

const Container = styled.div`
  flex: 1;
  overflow-y: auto;

  > div {
    width: 60%;
    margin: auto;
  }
`

const Events = styled.ul`
  padding: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #bcbcbc;
    opacity: .33;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Event = styled.li`
  display: flex;

  :nth-child(odd) {
    flex-direction: row-reverse;

    > div:last-child {
      margin-right: 24px;

      &::before {
        right: -17px;
        border-style: solid;
        border-width: 8px;
        border-color: transparent transparent transparent #bcbcbc;
      }
    }
  }

  :nth-child(even) {
    > div:last-child {
      margin-left: 24px;

      &::before {
        left: -17px;
        border-style: solid;
        border-width: 8px;
        border-color: transparent #bcbcbc transparent transparent;
      }
    }
  }

  + li {
    margin-top: 12px;
  }

  > div {
    box-sizing: border-box;
    flex: 1;
    padding: 12px;
  }
  
  > div:last-child {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .13);
    position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
