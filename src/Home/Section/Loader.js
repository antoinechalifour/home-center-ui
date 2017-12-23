import React from 'react'
import FoldingCube from 'ui/Loader'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const Loader = () => (
  <Wrapper>
    <FoldingCube />
  </Wrapper>
)

export default Loader
