import styled from 'styled-components'

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
  transition: letter-spacing .25s ease-in;

  :hover {
    letter-spacing: 1px;
  }

  ${({ theme, primary }) => primary && `
    background: ${theme.colors.primary};
    color: #fff;
  `}
`

export default Button
