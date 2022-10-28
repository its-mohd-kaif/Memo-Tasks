import React, { useContext } from "react";
// Import Notecontext
import { noteContext } from "../App";

function ComponentD() {
  // Make variable data and store value of context 
  let data = useContext(noteContext);
  return (
    <>
      <div>ComponentD</div>
      <h3>Hello {data}</h3>
      <hr></hr>
    </>
  );
}

export default ComponentD;
