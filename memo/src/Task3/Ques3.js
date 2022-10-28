import React, { useState } from "react";
import "./Style3.css";

function Ques3() {
  const [amount, setAmount] = useState("");
  const [fCountry, setFCountry] = useState("");
  const [tcountry, setTCountry] = useState("");
  const [result, setResult] = useState("");
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const fromSelector = (e) => {
    setFCountry(e.target.value);
  };
  const toSelector = (e) => {
    setTCountry(e.target.value);
  };
  const exchangeHandler = () => {
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
          <button className="btnTask3" onClick={exchangeHandler}>Get Exchange Rate</button>
        </div>

        <h3>{result}</h3>
      </div>
      <hr></hr>
    </div>
  );
}

export default Ques3;
