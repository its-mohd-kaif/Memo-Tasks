import React, { useState, useEffect } from "react";
import "./Style4.css";
function Ques4() {
  const [text, setText] = useState("");
  // const [result,setResult]=useState("");

  const [char, setChar] = useState("");
  const [word, setWord] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
    let char = e.target.value;
    setChar(char.length);
  };
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    const arr = text.split(" ");

    let wordLength = arr.filter((word) => word !== "").length;
    setWord(wordLength);
  }, [text]);
  const upperBtn = () => {
    let tempText = text.toUpperCase();
    setText(tempText);
  };
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
