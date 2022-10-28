import React, { useState, useEffect } from "react";
import "./Style4.css";
function Ques4() {
  // UseState For Input Text Field
  const [text, setText] = useState("");
  // UseState For holding total character Length
  const [char, setChar] = useState("");
  // UseState For holding total words
  const [word, setWord] = useState("");
  // Text Handler
  const textHandler = (e) => {
    setText(e.target.value);
    let char = e.target.value;
    // Value of character length put into SetChar State
    setChar(char.length);
  };
  useEffect(() => {
    // Split string when space is found
    const arr = text.split(" ");
    // Store word count in wordLength
    let wordLength = arr.filter((word) => word !== "").length;
    // Put value of wordLength into word State
    setWord(wordLength);
  }, [text]);
  // Convert String Lower Case into Upper Case
  const upperBtn = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
  };
  // Convert String Upper Case into Lowercase
  const lowerBtn = () => {
    let tempText = text.toLowerCase();
    setText(tempText);
  };
  return (
    <div className="task4">
      <h1>Ques 4</h1>
      <h3>Text Utility App</h3>
      <span>Text Area</span>
      <br></br>
      <div>
        <textarea onChange={textHandler} value={text} />
      </div>
      <div>
        <button onClick={upperBtn} className="btnTask4">
          Upper Case
        </button>
        <button onClick={lowerBtn} className="btnTask4">
          Lower Case
        </button>
      </div>
      <div className="resultTask4">
        <span>Summary</span>
        <p>
          {word} Words and {char} character
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques4;
