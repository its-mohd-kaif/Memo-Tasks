import React, { useContext } from "react";
import { noteContext } from "../App";

function ComponentD() {
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
