import React, { useState } from "react";
import "./Style5.css";
function Ques5() {
  // UseState for Input Number
  let [num, setNum] = useState("");
  // UseState for result
  const [result, setResult] = useState("");
  // Getting Input Number In State Variable
  const inputHandler = (e) => {
    setNum(e.target.value);
  };
  // Click Button Handler
  const btnHandler = () => {
    // Make Array "a" And store number words
    var a = [
      "",
      "one ",
      "two ",
      "three ",
      "four ",
      "five ",
      "six ",
      "seven ",
      "eight ",
      "nine ",
      "ten ",
      "eleven ",
      "twelve ",
      "thirteen ",
      "fourteen ",
      "fifteen ",
      "sixteen ",
      "seventeen ",
      "eighteen ",
      "nineteen ",
    ];
    // Make Array "b" And Store number Words
    var b = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    // Check if number length is greater then 9 so display "Number Limit Reached"
    if ((num = num.toString()).length > 9)
      return setResult("Number Limit Reached");
    // Make Variable "n" and concate with 9 digits like...
    // Ex. If user Press 23 in inbox so "n" store "00 00 00 0 23"
    let n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      

    if (!n) return;
    // Make Str Variable
    var str = "";
    // Check if number lies in n[1] so add number words along with "crore" and store in "str" variable
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    // Check if number lies in n[2] so add number words along with "lakh" and store in "str" variable
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    // Check if number lies in n[3] so add number words along with "thousand" and store in "str" variable
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    // Check if number lies in n[4] so add number words along with "hundred" and store in "str" variable
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    // Check if number lies in n[5] so add number words along with "only" and store in "str" variable
    str +=
      n[5] !== 0
        ? (str != "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    setResult(str);
  };
  return (
    <div className="Task5">
      <h1>Number To Word</h1>
      <span className="spanTask5">Enter Number</span>
      <input
        onChange={inputHandler}
        type={"number"}
        placeholder="type number..."
      />
      <br></br>
      <br></br>
      <button className="btnTask5" onClick={btnHandler}>
        Click
      </button>
      {/* Display Result */}
      <h1>{result}</h1>
    </div>
  );
}

export default Ques5;
