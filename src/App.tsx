import { RoutesComponent } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Footer } from "./components/Footer";
import { HeroContextProvider } from "./contexts/useHero";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <ToastProvider>
        <BrowserRouter>
          <HeroContextProvider>
            <RoutesComponent />
            <Footer />
          </HeroContextProvider>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
