import styled from "styled-components";

const SearchBarStyled = styled.div`
  margin-top: 3rem;

  .search {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .search__bar {
    height: 40px;
    padding: 5px;
    border: 1px solid #212121;
    border-radius: 5px;
  }
`;
export default SearchBarStyled;
