import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";

export const Navbar: FC = () => {
  const nav = useNavigate();

  const handleNavigation = (route: string) => {
    nav(route);
  };

  return (
    <AppBar component="nav" position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sight & Sound
        </Typography>
        <Box>
          <Button
            onClick={() => handleNavigation(ROUTE.DASHBOARD)}
            sx={{ color: "#000" }}
          >
            Home
          </Button>
          <Button
            onClick={() => handleNavigation(ROUTE.FILMS)}
            sx={{ color: "#000" }}
          >
            Films
          </Button>
          <Button
            onClick={() => handleNavigation(ROUTE.DIRECTORS)}
            sx={{ color: "#000" }}
          >
            Directors
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
