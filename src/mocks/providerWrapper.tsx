import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import GlobalStyles from "../style/GlobalStyles";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const providerWrapper = ({ children }: ProviderWrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        {children}
      </Provider>
      ;
    </BrowserRouter>
  );
};

export default providerWrapper;
