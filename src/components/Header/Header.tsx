import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="main-title">The Weathersit</h1>
      <img
        width={25}
        height={25}
        className="image-title"
        src="../../sun.png"
        alt="A sun"
      />
    </HeaderStyled>
  );
};

export default Header;
