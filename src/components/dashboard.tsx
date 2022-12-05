import { FC } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

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
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#e5e7ce" }}>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#b4645a" }}>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#a4b8c4" }}>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#f0eaea" }}>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
      <Window style={{ backgroundColor: "#268355" }}>
        <Chart alt="img" src="/images/chart.svg" />
      </Window>
    </>
  );
};
