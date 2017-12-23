import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
`

export default Card

export const Content = styled.div`
  padding: 12px;
  color: ${({ theme }) => theme.colors.dark};
`
