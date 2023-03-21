import { ThemeProvider } from "styled-components";
import PersonalHomepage from "./features/PersonalHomepage";
import { GlobalStyle } from "./common/GlobalStyle";
import { lightMode } from "./common/ModeSwitcher/theme";

function App() {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
