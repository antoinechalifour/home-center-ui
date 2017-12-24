import styled from 'styled-components'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.backgroundInverse};
  color:  ${({ theme }) => theme.colors.textInverse};
  box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
`

export default Card

export const Content = styled.div`
  padding: 12px;
  color: ${({ theme }) => theme.colors.textInverse};
`
