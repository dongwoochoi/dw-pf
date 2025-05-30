import { useState } from "react";

export default function useCareer() {
  const [selectedYear, setSelectYear] = useState<string>("Dev_Career");
  // const [clickedCareer, setClickedCareer] = useState<string>("");

  // const resetClickCareer = () => {
  //   setClickedCareer("");
  // };

  // const handleClick = (value: string) => {
  //   if (clickedCareer === value) {
  //     setClickedCareer("");
  //   } else {
  //     setClickedCareer(value);
  //   }
  // };

  const handleYear = (year: string) => {
    setSelectYear(year);
    // resetClickCareer();
  };

  return {
    selectedYear,
    // clickedCareer,
    handleYear,
  };
}
