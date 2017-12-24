import styled from 'styled-components'

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  background: none;
  border: none;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 90%;

  ${({ theme, primary }) => primary && `
    background: ${theme.colors.primary};
    color: #fff;
  `}
`

export default Button
