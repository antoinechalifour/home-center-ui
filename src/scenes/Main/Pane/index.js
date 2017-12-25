import styled from 'styled-components'

const Pane = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-direction: column;
`

export default Pane

export const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
`

export const Title = styled.h2`
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  text-align: center;
  text-transform: uppercase;
`

export const Divider = styled.div`
  height: 1px;
  margin: 16px auto;
  background: ${({ theme }) => theme.colors.light};
`
