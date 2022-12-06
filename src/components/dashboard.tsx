import { FC } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Window = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  scroll-snap-type: y mandatory;
`;

const Chart = styled.img`
  max-width: 580px;
  width: 35%;
  min-width: 460px;
  height: auto;
  max-height: auto;
  background-color: none;
`;

export const Dashboard: FC = () => {
  return (
    <>
      <Window style={{ backgroundColor: "#121212" }}>
        <Typography>Homepage blurb</Typography>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#113d8e" }}>
        <Chart alt="img" src="/images/chart.svg" />
        <Typography>Map blurb</Typography>
      </Window>
      <Window style={{ backgroundColor: "#b4645a" }}>
        <Typography>Cool fact</Typography>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#29600c" }}>
        <Chart alt="img" src="/images/chart.svg" />
        <Typography>Something cool here as well</Typography>
      </Window>
    </>
  );
};
