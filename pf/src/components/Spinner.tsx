/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";

export default function Spinner() {
  return (
    <div css={spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

const hideAndShow = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const spinner = {
  position: "relative" as const,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",

  "& > div": {
    position: "absolute" as const,
    transformOrigin: "center",
    width: "4px",
    height: "36px",
    animation: `${hideAndShow} 1.2s linear infinite`,
    background: `linear-gradient(to top, transparent 0 80%, white 80% 100%)`,
    "&:nth-of-type(1)": {
      transform: "rotate(0deg)",
      animationDelay: "-1.1s",
    },
    "&:nth-of-type(2)": {
      transform: "rotate(30deg)",
      animationDelay: "-1s",
    },
    "&:nth-of-type(3)": {
      transform: "rotate(60deg)",
      animationDelay: "-0.9s",
    },
    "&:nth-of-type(4)": {
      transform: "rotate(90deg)",
      animationDelay: "-0.8s",
    },
    "&:nth-of-type(5)": {
      transform: "rotate(120deg)",
      animationDelay: "-0.7s",
    },
    "&:nth-of-type(6)": {
      transform: "rotate(150deg)",
      animationDelay: "-0.6s",
    },
    "&:nth-of-type(7)": {
      transform: "rotate(180deg)",
      animationDelay: "-0.5s",
    },
    "&:nth-of-type(8)": {
      transform: "rotate(210deg)",
      animationDelay: "-0.4s",
    },
    "&:nth-of-type(9)": {
      transform: "rotate(240deg)",
      animationDelay: "-0.3s",
    },
    "&:nth-of-type(10)": {
      transform: "rotate(270deg)",
      animationDelay: "-0.2s",
    },
    "&:nth-of-type(11)": {
      transform: "rotate(300deg)",
      animationDelay: "-0.1s",
    },
    "&:nth-of-type(12)": {
      transform: "rotate(330deg)",
      animationDelay: "0s",
    },
  },
};
