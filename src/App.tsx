import { RoutesComponent } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
