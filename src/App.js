import { ThemeProvider } from "styled-components";
import PersonalHomepage from "./features/PersonalHomepage";
import { GlobalStyle } from "./common/GlobalStyle";
import { darkMode, lightMode } from "./common/ModeSwitcher/theme";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./common/ModeSwitcher/modeSlice";

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
