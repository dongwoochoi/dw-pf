import { useState } from "react";

export default function useFixedMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    handleOpen,
  };
}
