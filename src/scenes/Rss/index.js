import React from 'react'
import Tabs, * as tabs from 'ui/Tabs'
import Card, * as card from 'ui/Card'
import Title from 'ui/WidgetTitle'
import Feed from './Feed'
import Sources from './Sources'

export default function Rss () {
  return (
    <div>
      <Title>Today's news</Title>
      <Tabs
        inititalActiveTab='feed'
        render={({ activeTab, changeTab }) => (
          <Card>
            <tabs.Header>
              <tabs.Tab onClick={() => changeTab('feed')}>News</tabs.Tab>
              <tabs.Tab onClick={() => changeTab('sources')}>Sources</tabs.Tab>
            </tabs.Header>

            <card.Content>
              {activeTab === 'feed' && <Feed />}
              {activeTab === 'sources' && <Sources />}
            </card.Content>
          </Card>
        )}
      />
    </div>
  )
}
