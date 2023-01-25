import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  .preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 110px;
    height: 110px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: #241e20;
  }

  #cloud {
    z-index: 2;
    height: 100px;
  }

  #cloud path {
    fill: #efefef;
  }

  #sun {
    margin-top: 6px;
    width: 60px;
    height: 60px;
    left: 20px;
    top: 66px;
    z-index: 1;

    animation-name: rotate;
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #sun path {
    stroke-width: 0.18;
    fill: #9ea1a4;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  /* Rain */
  .rain {
    width: 70px;
    height: 70px;
    margin-top: -32px;
  }

  .drop {
    opacity: 1;
    background: #9ea1a4;
    display: block;
    float: left;
    width: 3px;
    height: 10px;
    margin-left: 4px;
    border-radius: 0px 0px 6px 6px;

    animation-name: drop;
    animation-duration: 350ms;
    animation-iteration-count: infinite;
  }

  .drop:nth-child(1) {
    animation-delay: -130ms;
  }

  .drop:nth-child(2) {
    animation-delay: -240ms;
  }

  .drop:nth-child(3) {
    animation-delay: -390ms;
  }

  .drop:nth-child(4) {
    animation-delay: -525ms;
  }

  .drop:nth-child(5) {
    animation-delay: -640ms;
  }

  .drop:nth-child(6) {
    animation-delay: -790ms;
  }

  .drop:nth-child(7) {
    animation-delay: -900ms;
  }

  .drop:nth-child(8) {
    animation-delay: -1050ms;
  }

  .drop:nth-child(9) {
    animation-delay: -1130ms;
  }

  .drop:nth-child(10) {
    animation-delay: -1300ms;
  }

  @keyframes drop {
    50% {
      height: 45px;
      opacity: 0;
    }

    51% {
      opacity: 0;
    }

    100% {
      height: 1px;
      opacity: 0;
    }
  }

  .text {
    font-family: Helvetica, "Helvetica Neue", sans-serif;
    letter-spacing: 1px;
    text-align: center;

    font-weight: bold;
    margin-top: 20px;
    font-size: 11px;
    color: #a0a0a0;
    width: 200px;
  }
`;
export default LoaderStyled;
