import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const initialState = { name: "", image: "", role: "", desc: "" };
  const [userData, setUserData] = useState(initialState);
  const [allUsers, setAllUsers] = useState([]);

  function change(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  function handler(e) {
    e.preventDefault();
    // Prevent adding if the name is empty
    if (userData.name.trim() === "") return;

    setAllUsers([...allUsers, userData]);
    setUserData(initialState);
  }

  const deleteHandler = (index) => {
    setAllUsers(allUsers.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-10">
      <form onSubmit={handler} className="mb-10">
        <div className="flex flex-col gap-3">
          <input
            name="name"
            value={userData.name}
            onChange={change}
            placeholder="Enter name"
            className="bg-gray-800 text-white rounded-xl p-3 w-1/2 border border-gray-700 focus:border-emerald-500 outline-none"
          />
          <input
            name="image"
            value={userData.image}
            onChange={change}
            placeholder="Image URL"
            className="bg-gray-800 text-white rounded-xl p-3 w-1/2 border border-gray-700 focus:border-emerald-500 outline-none"
          />
          <input
            name="role"
            value={userData.role}
            onChange={change}
            placeholder="Enter role"
            className="bg-gray-800 text-white rounded-xl p-3 w-1/2 border border-gray-700 focus:border-emerald-500 outline-none"
          />
          <textarea
            name="desc"
            value={userData.desc}
            onChange={change}
            placeholder="Enter description"
            className="bg-gray-800 text-white rounded-xl p-3 w-1/2 border border-gray-700 focus:border-emerald-500 outline-none"
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 w-fit px-8 py-3 rounded-xl text-white font-bold transition-all">
            Add User
          </button>
        </div>
      </form>

      <hr className="border-gray-700 mb-10" />

      <div className="flex flex-wrap gap-6">
        {allUsers.length > 0 ? (
          allUsers.map((item, index) => (
            <Card
              key={index}
              user={item}
              allUsers={allUsers}
              setAllUsers={setAllUsers}
              index={index}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <p className="text-gray-500 italic">
            No users added yet. Fill the form to create a card.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
