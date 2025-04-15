import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../constants/breakpoints";

export default function useResponsive() {
  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tablet}px)`,
  });
  const isLaptop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.laptop}px)`,
  });
  const isPc = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.desktop}px)`,
  });

  const isTooSmall = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.min}px)`,
  });

  const isTooWide = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.max}px)`,
  });

  const isUnable = isTooSmall || isTooWide;

  return { isPc, isTablet, isLaptop, isUnable };
}
