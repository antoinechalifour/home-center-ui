import React from 'react'
import styled from 'styled-components'
import Tabs, * as tabs from 'ui/Tabs'
import Feed from './Feed'
import Sources from './Sources'

export default function Rss () {
  return (
    <Tabs
      inititalActiveTab='feed'
      render={({ activeTab, changeTab }) => (
        <Container>
          <tabs.Header>
            <tabs.Tab onClick={() => changeTab('feed')}>News</tabs.Tab>
            <tabs.Tab onClick={() => changeTab('sources')}>Sources</tabs.Tab>
          </tabs.Header>

          <Content>
            {activeTab === 'feed' && <Feed />}
            {activeTab === 'sources' && <Sources />}
          </Content>
        </Container>
      )}
    />
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  padding: 0 12px;
  overflow-y: auto;
`
