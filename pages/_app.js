import { ThemeProvider } from "styled-components";
import { DurationsContextProvider } from "../context/durationsContext";
import { SelectedColorProvider } from "../context/selectedColorContext";
import { SelectedFontProvider } from "../context/selectedFontContext";

import { darkTheme } from "../style/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <DurationsContextProvider>
        <SelectedFontProvider>
          <SelectedColorProvider>
            <Component {...pageProps} />
          </SelectedColorProvider>
        </SelectedFontProvider>
      </DurationsContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
