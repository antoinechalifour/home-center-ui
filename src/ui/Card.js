import styled from 'styled-components'

const Card = styled.div`
  background: #ffffff;
  color:  ${({ theme }) => theme.colors.text};
  box-shadow: 0 1px 3px rgba(0, 0, 0, .13);
`

export default Card

export const Content = styled.div`
  padding: 12px;
`
