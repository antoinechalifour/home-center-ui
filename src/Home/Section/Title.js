import styled from 'styled-components'

const SectionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`

export default SectionTitle
