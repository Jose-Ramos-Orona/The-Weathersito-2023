import styled from "styled-components";

const SearchBarStyled = styled.div`
  margin-top: 2rem;

  .search {
    display: flex;
  }

  .search__bar {
    font-size: 16px;
    text-align: center;
    padding: 10px;
    border: 1px solid #212121;
    border-radius: 5px 0 0 5px;
  }

  .search__button {
    padding: 10px;
    border-radius: 0 5px 5px 0;
  }
`;
export default SearchBarStyled;
