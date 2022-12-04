import { FC } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./navbar";
import { Container } from "@mui/system";
import { Footer } from "./footer";
import { theme } from "./theme";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};
