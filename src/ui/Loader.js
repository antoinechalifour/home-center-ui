import React from 'react'
import styled, { keyframes } from 'styled-components'

/*
Most of the content of this file is a styled component port
of this article: http://tobiasahlin.com/spinkit/
*/

const FoldingCubeLoader = () => (
  <FoldingCube>
    <Cube1 />
    <Cube2 />
    <Cube3 />
    <Cube4 />
  </FoldingCube>
)

const foldCubeAngle = keyframes`
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
`

const FoldingCube = styled.div`
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);
`

const Cube1 = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1); 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .45);
    animation: ${foldCubeAngle} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
`

const Cube2 = Cube1.extend`
  transform: scale(1.1) rotateZ(90deg);
  &::before {
    animation-delay: 0.3s;
  }
`

const Cube3 = Cube1.extend`
  transform: scale(1.1) rotateZ(270deg);
  &::before {
    animation-delay: 0.9s;
  }
`

const Cube4 = Cube1.extend`
  transform: scale(1.1) rotateZ(180deg);
  &::before {
    animation-delay: 0.6s;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export default function Loader () {
  return (
    <LoaderWrapper>
      <FoldingCubeLoader />
    </LoaderWrapper>
  )
}
