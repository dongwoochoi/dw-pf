/** @jsxImportSource @emotion/react */
/* eslint-disable */
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { visibleSectionAtom } from "../../../jotai/visibleSection";
import useMeasurement from "../../../hooks/useMeasurement";

interface PropsType {
  logo: string;
  percent: number;
  currentIndex: number;
  needFit?: boolean;
  handleClick: () => void;
}

export default function GaugeComponent({
  logo,
  percent,
  currentIndex,
  needFit = false,
  handleClick,
}: PropsType) {
  const { swiperSizeConverter } = useMeasurement();
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
      css={wrapper(swiperSizeConverter().circleSize)}
      onClick={handleClick}
      onMouseEnter={() => {
        setMousHoverCounter(mousHoverCounter + 1);
      }}
    >
      <CircularProgressbar
        value={progress}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: "var(--accent)",
          trailColor: "var(--bg-muted)",
        })}
      />
      <img
        css={imageStyle(needFit, swiperSizeConverter().circleImgSize)}
        src={logo}
        alt={logo}
      />
    </div>
  );
}

const wrapper = (size: number) => ({
  position: "relative" as const,
  flexShrink: 0,
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "var(--bg-base)",
  border: "1px solid var(--border-color)",
  boxSizing: "border-box" as const,
  cursor: "pointer",
  "&: hover": {
    scale: "1.2",
  },
});

const imageStyle = (needFit: boolean, imgSize: number) => ({
  position: "absolute" as const,
  width: `${imgSize}px`,
  height: `${imgSize}px`,
  borderRadius: "15px",
  objectFit: needFit ? ("cover" as const) : ("fill" as const),
});
