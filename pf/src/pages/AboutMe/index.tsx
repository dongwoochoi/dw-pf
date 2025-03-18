/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      aboutMeRef: ref,
    };
  });

  return (
    <div css={wrapper} ref={ref} id="aboutMe">
      <p css={titleTextStyle}>About Me</p>
    </div>
  );
}

const wrapper = {
  display: "flex",
  justifyContent: "center",
  width: "85%",
  height: "500px",
};

const titleTextStyle = {
  fontFamily: "agro",
  color: "white",
  fontSize: "60px",
  fontWeight: "800",
  marginTop: "60px",
};
