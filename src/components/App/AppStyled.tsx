import styled from "styled-components";

const AppStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    padding: 0 15px;
  }

  .container svg {
    position: relative;
    display: block;
    width: calc(148% + 1.3px);
    height: 60px;
  }
`;

export default AppStyled;
