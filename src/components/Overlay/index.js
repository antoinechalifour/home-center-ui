import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }


  100% {
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, .9);
  width: 100% !important;
  z-index: 100;
  animation: ${fadeIn} .1s ease-in;
`

export default Overlay
