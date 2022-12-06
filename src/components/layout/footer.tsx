import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  padding: 48px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

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
    <FooterBox>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        I have no affiliation with BFI or Sight & Sound Magazine.
      </Typography>
      <Links />
    </FooterBox>
  );
};
