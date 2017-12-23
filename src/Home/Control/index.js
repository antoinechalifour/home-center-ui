import React from 'react'
import Section, * as section from 'Home/Section'
import Lights from './Lights'

const Control = () => (
  <Section>
    <section.Title>
      Home
    </section.Title>
    <section.Content>
      <Lights />
    </section.Content>
  </Section>
)

export default Control
