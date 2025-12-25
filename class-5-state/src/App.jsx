import React, { useState } from "react";
import Washroom from "./components/Washroom";

const App = () => {
  const [gender, setGender] = useState("male");
  function changeGender() {
    if (gender == "male") {
      setGender("female");
    } else if (gender == "female") {
      setGender("other");
    } else {
      setGender("male");
    }
  }
  return (
    <div className="box">
      <h1>{gender}</h1>
      <button onClick={changeGender}>Chnage Gender</button>
      <Washroom
        text={gender}
        bg={gender == "male" ? "blue" : gender == "other" ? "maroon" : "pink"}
      />
    </div>
  );
};

export default App;
