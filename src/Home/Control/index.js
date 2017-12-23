import React from 'react'
import Section, * as section from 'Home/Section'
import Lights from './Lights'
import Weather from './Weather'

const Control = () => (
  <Section>
    <section.Title>
      Home
    </section.Title>
    <section.Content>
      <Weather />
      <section.Divider />
      <Lights />
    </section.Content>
  </Section>
)

export default Control
