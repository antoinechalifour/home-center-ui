import styled from 'styled-components'

const WidgetTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 12px;
  letter-spacing: 0.1rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 350px;
    height: 1px;
    background: rgba(255, 255, 255, .15);
  }
`

export default WidgetTitle
