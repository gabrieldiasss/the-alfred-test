import { RoutesComponent } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
