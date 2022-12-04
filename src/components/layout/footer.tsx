import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";

function Links() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="https://letterboxd.com/plus155/">
        Letterboxd
      </Link>{" "}
      <Link color="inherit" href="https://github.com/rh-jayson/s-and-s">
        Repo
      </Link>
    </Typography>
  );
}

export const Footer: FC = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        I have no affiliation with BFI or Sight & Sound Magazine.
      </Typography>
      <Links />
    </Box>
  );
};
