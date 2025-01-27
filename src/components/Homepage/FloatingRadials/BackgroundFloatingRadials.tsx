import React from 'react'
import styled, { keyframes } from 'styled-components'
import FloatingRadial from './FloatingRadial'

const floating1 = keyframes`
    0% {
      transform: translate(0, 0px);
      opacity: 0;
    }
    10% {
      transform: translate(10px, 10px);
      opacity: 1;
    }
    20% {
      transform: translate(-15px, -15px);
      opacity: 0;
    }
    30% {
      transform: translate(10px, 10px);
      opacity: 1;
    }
    40% {
      transform: translate(0px, -20px);
      opacity: 1;
    }

    50% {
      transform: translate(20px, 10px);
      opacity: 0;
    }
    60% {
      transform: translate(-20px, 0px);
      opacity: 1;
    }
    70% {
      transform: translate(-0px, -20px);
      opacity: 1;
    }
    80% {
      transform: translate(20px, 0px);
      opacity: 0;
    }
    90% {
      transform: translate(-30px, -10px);
      opacity: 0;
    }
    100% {
      transform: translate(0, -0px);
      opacity: 1;
    }
  `

const floating2 = keyframes`
    0% {
      transform: translate(0, 0px);
      opacity: 0;
    }
    10% {
      transform: translate(-30px, -25px);
      opacity: 1;
    }
    20% {
      transform: translate(10px, 10px);
      opacity: 0;
    }
    30% {
      transform: translate(10px, -20px);
      opacity: 1;
    }
    40% {
      transform: translate(-10px, 10px);
      opacity: 1;
    }
    50% {
      transform: translate(-20px, 0px);
      opacity: 0;
    }
    60% {
      transform: translate(10px, 10px);
      opacity: 0;
    }
    70% {
      transform: translate(10px, 0px);
      opacity: 1;
    }
    80% {
      transform: translate(-0px, -20px);
      opacity: 0;
    }
    90% {
      transform: translate(10px, 20px);
      opacity: 1;
    }
    100% {
      transform: translate(0, -0px);
      opacity: 1;
    }
  `

const TabletUpFloatingRadial = styled(FloatingRadial)`
  @media (max-width: 767px) {
    display: none;
  }
`

const FloatingRadialTopLeft = styled(TabletUpFloatingRadial)`
  position: absolute;
  z-index: 0;

  top: 150px;
  left: 100px;

  animation-name: ${floating2};
  animation-duration: 18s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @media (max-width: 1024px) {
    display: none;
  }
`

const FloatingRadialLeft = styled(TabletUpFloatingRadial)`
  position: absolute;
  z-index: 0;

  left: 130px;
  top: 600px;

  animation-name: ${floating1};
  animation-duration: 26s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @media (max-width: 1024px) {
    top: 500px;
  }
`

const FloatingRadialBottomLeft = styled(TabletUpFloatingRadial)`
  position: absolute;
  z-index: 0;
  filter: blur(2px);

  left: 250px;
  top: 1200px;

  animation-name: ${floating2};
  animation-duration: 22s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @media (max-width: 1024px) {
    top: 1500px;
  }
`

const FloatingRadialRight = styled(TabletUpFloatingRadial)`
  position: absolute;
  z-index: 0;
  filter: blur(0);

  right: 100px;
  top: 1200px;

  animation-name: ${floating2};
  animation-duration: 28s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @media (max-width: 1024px) {
    top: 1500px;
  }
`

const FloatingRadialBottomRight = styled(TabletUpFloatingRadial)`
  position: absolute;
  z-index: 0;
  filter: blur(5px);

  right: 190px;
  top: 1300px;

  animation-name: ${floating1};
  animation-duration: 40s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;

  @media (max-width: 1024px) {
    top: 1650px;
  }
`

const BackgroundFloatingRadials: React.FC = () => {
  return (
    <>
      <FloatingRadialTopLeft width={12} height={12} className="top-left" />
      <FloatingRadialLeft width={24} height={24} className="left" />
      <FloatingRadialBottomLeft
        width={14}
        height={14}
        className="bottom-left"
      />
      <FloatingRadialRight
        width={14}
        height={14}
        color="#325CBD"
        className="right"
      />
      <FloatingRadialBottomRight
        width={24}
        height={24}
        className="bottom-right"
      />
    </>
  )
}

export default BackgroundFloatingRadials
