/** @jsxImportSource @emotion/react */
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { visibleSectionAtom } from "../../../jotai/visibleSection";

interface PropsType {
  logo: string;
  percent: number;
  speed: number;
  currentIndex: number;
  needFit?: boolean;
  handleClick: () => void;
}

export default function GaugeComponent({
  logo,
  percent,
  speed,
  currentIndex,
  needFit = false,
  handleClick,
}: PropsType) {
  const [progress, setProgress] = useState(0);
  const [mousHoverCounter, setMousHoverCounter] = useState<number>(0);
  const isVisible = useAtomValue(visibleSectionAtom);
  useEffect(() => {
    setProgress(-100);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < percent) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1);

    return () => clearInterval(interval);
  }, [mousHoverCounter, currentIndex, isVisible]);

  return (
    <div
      css={wrapper}
      onClick={handleClick}
      onMouseEnter={() => {
        setMousHoverCounter(mousHoverCounter + 1);
      }}
    >
      <CircularProgressbar
        value={progress}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: "#DDDDDD", // 진행 색상 (오렌지)
          trailColor: "#4B4B4B", // 배경 트레일 색상 (어두운 회색)
        })}
      />
      <img css={imageStyle(needFit)} src={logo} alt={logo} />
    </div>
  );
}

const wrapper = {
  width: "100px",
  height: "100px",
  borderRadius: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#1D1D1D",
  cursor: "pointer",
  "&: hover": {
    scale: "1.2",
  },
};

const imageStyle = (needFit: boolean) => ({
  position: "absolute" as const,
  width: "50px",
  height: "50px",
  borderRadius: "15px",
  objectFit: needFit ? ("cover" as const) : ("fill" as const),
});
