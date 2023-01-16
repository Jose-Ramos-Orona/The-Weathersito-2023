import styled from "styled-components";

const WeatherCardStyled = styled.div`
  width: 190px;
  height: 300px;
  margin-top: 100px;
  background: #f5f5f5;
  overflow: visible;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .weather-container__current {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 0 1rem;
  }

  .weather-container__temperature {
    display: flex;
    background: #f5f5f5;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translateY(-50%);
    position: relative;
    transition: all 0.3s ease-in-out;
    border: 3px solid black;
  }

  .weather-container__temperature::before {
    content: "";
    border-radius: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    border: 1rem solid papayawhip;
  }

  .weather-container__representation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default WeatherCardStyled;
