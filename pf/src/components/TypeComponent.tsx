import { useEffect, useState } from "react";
import useMeasurement from "../hooks/useMeasurement";

const messages = [
  "끊임없이 성장하는",
  "책임감 있는",
  "다양한 시각에서 바라보는",
  "꺾이지 않는 마음을 가진",
  "배우는 것을 좋아하는",
  "막히는것을 두려워하지 않는",
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1000;

const TypeComponent = () => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { typingFontSize } = useMeasurement();
  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }, DELETING_SPEED);
    } else {
      if (text !== currentMessage) {
        timer = setTimeout(() => {
          setText(currentMessage.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, messageIndex]);

  return (
    <div
      style={{
        fontSize: `${typingFontSize()}px`,
        fontFamily: "agroL",
        whiteSpace: "pre",
      }}
    >
      {text}
      <span className="cursor">|</span>
      <span>개발자</span>
    </div>
  );
};
export default TypeComponent;
