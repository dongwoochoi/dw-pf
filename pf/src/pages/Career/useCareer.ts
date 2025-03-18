import { useState } from "react";

export default function useCareer() {
  const [selectedYear, setSeletecYear] = useState<string>("2018");
  const [clickedCareer, setClickedCareer] = useState<string[]>([]);

  const resetClickCareer = () => {
    setClickedCareer([]);
  };

  const handleClick = (value: string) => {
    if (clickedCareer.includes(value)) {
      const newArray = clickedCareer.filter((item) => item !== value);
      setClickedCareer(newArray);
    } else {
      setClickedCareer((prev) => [...prev, value]);
    }
  };

  const handleYear = (year: string) => {
    setSeletecYear(year);
    resetClickCareer();
  };

  return {
    selectedYear,
    clickedCareer,
    handleYear,
    handleClick,
  };
}
