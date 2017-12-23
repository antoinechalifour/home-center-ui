import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Section
export { default as Loader } from './Loader'
export { default as Title } from './Title'

export const Content = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
`

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.light};
  margin: 16px auto;
`
