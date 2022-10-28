import { createContext } from "react";
import "./App.css";
import ComponentA from "./Task1/ComponentA";
import ComponentB from "./Task1/ComponentB";
import ComponentC from "./Task1/ComponentC";
import ComponentD from "./Task1/ComponentD";
import Ques1 from "./Task1/Ques1";
import ParentComponent from "./Task2/ParentComponent";
import Ques2 from "./Task2/Ques2";
import Ques3 from "./Task3/Ques3";
import Ques4 from "./Task4/Ques4";
import Ques5 from "./Task5/Ques5";
export const noteContext = createContext();
function App() {
  const username = "Kaif";
  return (
    <div className="App">
      <Ques1 />
      <noteContext.Provider value={username}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        <ComponentD/>
      </noteContext.Provider>
      <Ques2/>
      <ParentComponent/>
      <Ques3/>
      <Ques4/>
      <Ques5/>
    </div>
  );
}

export default App;
