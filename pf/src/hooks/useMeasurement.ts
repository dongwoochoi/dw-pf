import useResponsive from "./useResponsive";

export default function useMeasurement() {
  const { isPc, isLaptop, isTablet, isMobile } = useResponsive();

  // -------------------------- 공용 부분 --------------------------
  const fontSizeTransfer = (size: number) => {
    if (isPc) {
      return size;
    }
    if (isLaptop) {
      return size - 2;
    }
    if (isTablet) {
      return size - 8;
    }
    return size - 10;
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
    return 32;
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
    return 120;
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
        gap: 80,
        boxWidth: 650,
        yearFontSize: 40,
        width: 800,
        height: 60,
        boxHeight: 750,
      };
    }
    if (isLaptop) {
      return {
        gap: 60,
        boxWidth: 550,
        yearFontSize: 40,
        width: 800,
        height: 45,
        boxHeight: 580,
      };
    }
    if (isTablet) {
      return {
        gap: 60,
        boxWidth: 400,
        yearFontSize: 28,
        width: 500,
        height: 38,
        boxHeight: 550,
      };
    }
    return {
      gap: 40,
      boxWidth: 280,
      yearFontSize: 24,
      width: 200,
      height: "auto",
      boxHeight: 350,
    };
  };

  const careerFontSizeConverter = () => {
    if (isPc) {
      return {
        periodFontSize: 24,
        headFontSize: 36,
        subFontSize: 24,
        liFontSize: 20,
      };
    }
    if (isLaptop) {
      return {
        periodFontSize: 18,
        headFontSize: 32,
        subFontSize: 18,
        liFontSize: 14,
      };
    }
    if (isTablet) {
      return {
        periodFontSize: 16,
        headFontSize: 26,
        subFontSize: 16,
        liFontSize: 12,
      };
    }
    return {
      periodFontSize: 12,
      headFontSize: 20,
      subFontSize: 12,
      liFontSize: 10,
    };
  };

  // -------------------------- Skill 부분 --------------------------
  const skillSizeConverter = () => {
    if (isPc) {
      return {
        height: 400,
      };
    }
    if (isLaptop) {
      return {
        height: 400,
      };
    }
    if (isTablet) {
      return {
        height: 250,
      };
    }
    return {
      height: 300,
    };
  };

  const swiperSizeConverter = () => {
    if (isPc) {
      return {
        width: 400,
        tapFontSize: 20,
        swiperGap: 36,
        circleSize: 100,
        circleImgSize: 50,
      };
    }
    if (isLaptop) {
      return {
        width: 300,
        tapFontSize: 16,
        swiperGap: 24,
        circleSize: 75,
        circleImgSize: 50,
      };
    }
    if (isTablet) {
      return {
        width: 250,
        tapFontSize: 12,
        swiperGap: 12,
        circleSize: 50,
        circleImgSize: 30,
      };
    }
    return {
      width: 300,
      tapFontSize: 12,
      swiperGap: 12,
      circleSize: 40,
      circleImgSize: 25,
    };
  };

  const explainSizeConverter = () => {
    if (isPc) {
      return {
        width: 600,
      };
    }
    if (isLaptop) {
      return {
        width: 400,
      };
    }
    if (isTablet) {
      return {
        width: 350,
      };
    }
    return {
      width: 280,
    };
  };

  // -------------------------- Project 부분 --------------------------
  const projectFontSizeConverter = () => {
    if (isPc) {
      return {
        title: 32,
        text: 16,
        tagPadding: "0px 4px",
        lineHeight: "18px",
      };
    }
    if (isLaptop) {
      return {
        title: 28,
        text: 12,
        tagPadding: "0px 4px",
        lineHeight: "14px",
      };
    }
    if (isTablet) {
      return {
        title: 24,
        text: 10,
        tagPadding: "0px 4px",
        lineHeight: "12px",
      };
    }
    return {
      title: 16,
      text: 10,
      tagPadding: "0px 4px",
      lineHeight: "12px",
    };
  };

  const projectSizeConverter = () => {
    if (isPc) {
      return {
        width: 500,
        hoverHeight: 250,
      };
    }
    if (isLaptop) {
      return {
        width: 450,
        hoverHeight: 224.17,
      };
    }
    if (isTablet) {
      return {
        width: 300,
        hoverHeight: 142.52,
      };
    }
    return {
      width: 278,
      hoverHeight: 131.2,
    };
  };

  const projectModalSizeConverter = () => {
    if (isPc) {
      return {
        headerGap: 24,
        headerMarginBottom: 60,
        font: {
          title: 60,
          boldSize: 36,
          category: 24,
          imgTitle: 16,
        },
        tag: {
          fontSize: 20,
          padding: 8,
          height: 30,
        },
      };
    }
    if (isLaptop) {
      return {
        headerGap: 16,
        headerMarginBottom: 40,
        font: {
          title: 48,
          boldSize: 28,
          category: 20,
          imgTitle: 16,
        },
        tag: {
          fontSize: 16,
          padding: 8,
          height: 26,
        },
      };
    }
    if (isTablet) {
      return {
        headerGap: 8,
        headerMarginBottom: 24,
        font: {
          title: 36,
          boldSize: 20,
          category: 16,
          imgTitle: 12,
        },
        tag: {
          fontSize: 12,
          padding: 8,
          height: 20,
        },
      };
    }
    return {
      headerGap: 8,
      headerMarginBottom: 8,
      font: {
        title: 36,
        boldSize: 16,
        category: 10,
        imgTitle: 8,
      },
      tag: {
        fontSize: 8,
        padding: 2,
        height: 12,
      },
    };
  };

  // -------------------------- End 부분 --------------------------

  const endSizeConverter = () => {
    if (isPc) {
      return {
        width: 300,
        height: 360,
        fontSize: 60,
      };
    }
    if (isLaptop) {
      return {
        width: 250,
        height: 300,
        fontSize: 48,
      };
    }
    if (isTablet) {
      return {
        width: 150,
        height: 190,
        fontSize: 36,
      };
    }
    return {
      width: 150,
      height: 190,
      fontSize: 36,
    };
  };

  return {
    isMobile,
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
    careerFontSizeConverter,
    swiperSizeConverter,
    explainSizeConverter,
    skillSizeConverter,
    projectSizeConverter,
    projectFontSizeConverter,
    projectModalSizeConverter,
    endSizeConverter,
  };
}
