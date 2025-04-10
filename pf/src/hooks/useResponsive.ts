import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../constants/breakpoints";

export default function useResponsive() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.mobileMax}px)`,
  });
  const isOverTablet = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tabletMin}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.tabletMax}px)`,
  });
  const isPc = useMediaQuery({ query: `(min-width: ${BREAK_POINT.pc}px)` });

  return { isPc, isTablet, isOverTablet, isMobile };
}
