import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({ firstname: "", lastname: "" });

  function change(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData, // Copy the existing state
      [name]: value, // Update only the field that changed using computed property names
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstname"
          onChange={change}
          placeholder="fname"
        />
        <input
          type="text"
          name="lastname"
          onChange={change}
          placeholder="lname"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
