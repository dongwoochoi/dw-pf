import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../constants/breakpoints";

export default function useResponsive() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT.tablet}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.tablet}px)`,
  });
  const isLaptop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.laptop}px)`,
  });
  const isPc = useMediaQuery({
    query: `(min-width: ${BREAK_POINT.desktop}px)`,
  });

  return { isPc, isTablet, isLaptop, isMobile };
}
