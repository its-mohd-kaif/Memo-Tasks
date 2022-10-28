import React, { useState } from "react";
import "./Style3.css";

function Ques3() {
  // Make States for Amount
  const [amount, setAmount] = useState("");
  // UseState for "From Country"
  const [fCountry, setFCountry] = useState("");
  // UseState for "To Country"
  const [tcountry, setTCountry] = useState("");
  // UseState for Result
  const [result, setResult] = useState("");
  // Get Amount Input Values
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  // Get From country value
  const fromSelector = (e) => {
    setFCountry(e.target.value);
  };
  // Get To Country value
  const toSelector = (e) => {
    setTCountry(e.target.value);
  };
  // Exchange Handler
  const exchangeHandler = () => {
    // Check Validation
    if (amount === "") {
      alert("Empty Amount Can Not Be Converted");
      document.getElementById("amount").focus();
    } else if (amount < 0) {
      alert("Negative Amount Can Not Be Converted");
      document.getElementById("amount").focus();
    } else if (fCountry === "") {
      alert("Please Select Country");
      document.getElementById("from").focus();
    } else if (tcountry === "") {
      alert("Please Select Country");
      document.getElementById("to").focus();
    } else {
      // After Validation do calcution for all possible case
      let tempResult = 0;
      let tempAmount = amount;
      let fromCountry = fCountry;
      let toCountry = tcountry;
      if (fromCountry === "IND" && toCountry === "USD") {
        tempResult = tempAmount / 82.47;
        tempResult = `${tempAmount} 🇮🇳 INR = ${tempResult} 🇺🇸 USD`;
      } else if (fromCountry === "IND" && toCountry === "IND") {
        tempResult = tempAmount;
        tempResult = `${tempAmount} 🇮🇳 INR = ${tempResult} 🇮🇳 INR`;
      } else if (fromCountry === "USD" && toCountry === "IND") {
        tempResult = tempAmount * 82.47;
        tempResult = `${tempAmount} 🇺🇸 USD = ${tempResult} 🇮🇳 INR`;
      } else if (fromCountry === "USD" && toCountry === "USD") {
        tempResult = tempAmount;
        tempResult = `${tempAmount} 🇺🇸 USD = ${tempResult} 🇺🇸 USD`;
      }
      setResult(tempResult);
    }
  };
  return (
    <div className="task3">
      <h1>Ques 3</h1>

      <h3>Make a Currency Converter as shown here</h3>
      <div>
        <h2>Currency Converter</h2>
        <span>Enter Amount</span>
        <br></br>
        <div className="input">
          <input
            type={"number"}
            onChange={amountHandler}
            placeholder="Enter Amount..."
            id="amount"
          />
        </div>
        <div className="row">
          <div className="column1">
            <span>From</span>
            <div className="select">
              <select onChange={fromSelector} id="from">
                <option value={""}>-Select-</option>
                <option value={"USD"}>🇺🇸 USD</option>
                <option value={"IND"}>🇮🇳 IND</option>
              </select>
            </div>
          </div>
          <div className="column2">
            <div className="btn">
              <h2>⇄</h2>
            </div>
          </div>
          <div className="column3">
            <div>
              <span>To</span>
              <div className="select">
                <select onChange={toSelector} id="to">
                  <option value={""}>-Select-</option>
                  <option value={"IND"}>🇮🇳 IND</option>
                  <option value={"USD"}>🇺🇸 USD</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="display_result"></div>
        <div>
          <button className="btnTask3" onClick={exchangeHandler}>
            Get Exchange Rate
          </button>
        </div>

        <h3>{result}</h3>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques3;
