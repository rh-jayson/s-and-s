import { FC, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: calc(100% - 70px);
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ffffff;
`;

export const ScrollButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
