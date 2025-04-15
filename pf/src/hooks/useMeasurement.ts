import useResponsive from "./useResponsive";

export default function useMeasurement() {
  const { isPc, isLaptop, isTablet } = useResponsive();

  // -------------------------- 공용 부분 --------------------------
  const fontSizeTransfer = (size: number) => {
    if (isPc) {
      return size;
    }
    if (isLaptop) {
      return size - 2;
    }
    if (isTablet) {
      return size - 12;
    }
    return size - 8;
  };

  const titleFontSizeTransfer = () => {
    if (isPc) {
      return 60;
    }
    if (isLaptop) {
      return 52;
    }
    if (isTablet) {
      return 40;
    }
    return 60;
  };

  const sideBarWidth = () => {
    if (isPc) {
      return 260;
    }
    if (isLaptop) {
      return 200;
    }
    if (isTablet) {
      return 100;
    }
    return 150;
  };

  const sideBarFontSizeTransfer = () => {
    if (isPc) {
      return 24;
    }
    if (isLaptop) {
      return 20;
    }
    if (isTablet) {
      return 12;
    }
    return 16;
  };

  const sideBarMarginTransfer = () => {
    if (isPc) {
      return "200px 40px 200px -40px";
    }
    if (isLaptop) {
      return "150px 40px 150px -40px";
    }
    if (isTablet) {
      return "100px 40px 100px -40px";
    }
    return "100px 40px 100px -40px";
  };

  const sideBarTopTransfer = () => {
    if (isPc) {
      return 200;
    }
    if (isLaptop) {
      return 200;
    }
    if (isTablet) {
      return 100;
    }
    return 200;
  };

  const fixedMenuTransfer = () => {
    if (isPc) {
      return {
        gap: 72,
        size: 60,
        icon: 24,
        toastFontSize: 16,
      };
    }
    if (isLaptop) {
      return {
        gap: 60,
        size: 48,
        icon: 18,
        toastFontSize: 12,
      };
    }
    if (isTablet) {
      return {
        gap: 48,
        size: 30,
        icon: 12,
        toastFontSize: 8,
      };
    }
    return {
      gap: 48,
      size: 36,
      icon: 12,
      toastFontSize: 8,
    };
  };

  // -------------------------- 메인 부분 --------------------------

  // -------------------------- About_Me 부분 --------------------------
  const myPictureSizeConverter = () => {
    if (isPc) {
      return 400;
    }
    if (isLaptop) {
      return 300;
    }
    if (isTablet) {
      return 150;
    }
    return 230;
  };

  const aboutMainGapSizeConverter = () => {
    if (isPc) {
      return 100;
    }
    if (isLaptop) {
      return 100;
    }
    if (isTablet) {
      return 50;
    }
    return 50;
  };

  // -------------------------- Career 부분 --------------------------
  const careerSizeConverter = () => {
    if (isPc) {
      return {
        yearFontSize: 40,
        width: 800,
        height: 60,
        gap: 160,
      };
    }
    if (isLaptop) {
      return {
        yearFontSize: 40,
        width: 600,
        height: 60,
        gap: 160,
      };
    }
    if (isTablet) {
      return {
        yearFontSize: 20,
        width: 350,
        height: 25,
        gap: 40,
      };
    }
    return {
      yearFontSize: 40,
      width: 400,
      height: 60,
      gap: 160,
    };
  };

  // -------------------------- Skill 부분 --------------------------

  // -------------------------- Project 부분 --------------------------

  // -------------------------- End 부분 --------------------------
  return {
    titleFontSizeTransfer,
    fontSizeTransfer,
    sideBarWidth,
    myPictureSizeConverter,
    sideBarFontSizeTransfer,
    fixedMenuTransfer,
    sideBarMarginTransfer,
    aboutMainGapSizeConverter,
    sideBarTopTransfer,
    careerSizeConverter,
  };
}
