import ErrorPageStyled from "./ErrorPageStyled";

const ErrorPage = (): JSX.Element => {
  return (
    <ErrorPageStyled>
      <h2 className="error-message">
        I'm sorry. There seems to be a problem with the information you are
        asking for. Try again please.
      </h2>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
