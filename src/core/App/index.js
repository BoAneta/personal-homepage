import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import PersonalHomepage from "../../features/PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { darkMode, lightMode } from "../../common/ModeSwitcher/theme";
import { Normalize } from "styled-normalize";
import { selectIsDarkMode } from "../../common/ModeSwitcher/modeSlice";

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);
  
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
