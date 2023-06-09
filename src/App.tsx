import { RoutesComponent } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { AppWrapper } from "./styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppWrapper>
          <RoutesComponent />
        </AppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
