// TypingAnimation.js

import "./index.css";

import  { useState, useEffect } from "react";
import "./index.css";

const TypingAnimation = ({ textArray }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let timeoutId;

    const typeText = (currentIndex) => {
      if (currentIndex <= textArray[index].length) {
        setText(textArray[index].slice(0, currentIndex));
        timeoutId = setTimeout(() => typeText(currentIndex + 1), 100); // Adjust the typing speed
      } else {
        timeoutId = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          typeText(0); // Reset the index and start typing the next text
        }, 2000); // Adjust the delay before switching to the next text
      }
    };

    typeText(0);

    return () => {
      clearTimeout(timeoutId);
      setText("");
    };
  }, [index, textArray]);
  return (
    <div className="typing-animation">
     <span className="cursor">|</span>
      <span className="text"> {text}</span>
    </div>
  );
};

export default TypingAnimation;
