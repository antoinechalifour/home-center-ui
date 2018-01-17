import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: none;
  font-family: inherit;
  outline: none;
  font-size: inherit;
  margin: 12px 0;
  padding: 0 8px;
  border-left: 2px solid transparent;
  transition: border .25s ease-in;

  :focus {
    border-left: 2px solid #d1d1d3;
  }
`

export default Input
