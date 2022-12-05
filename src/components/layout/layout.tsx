import { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Footer } from "./footer";
import { theme } from "./theme";
import { NavButtons } from "../nav-buttons";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavButtons />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
