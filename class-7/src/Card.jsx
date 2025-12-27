import React from "react";

const Card = ({ user, setAllUsers, allUsers }) => {
  return (
    <div className="relative w-80 bg-gray-800 border border-gray-700 rounded-3xl p-5 shadow-2xl overflow-hidden group">
      {/* Decorative background glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>

      {/* Delete Button (Logic goes in the onClick) */}
      <button
        onClick={() => {
          let restUsers = allUsers.filter((el) => el.name != user.name);
          setAllUsers(restUsers);
        }}
        className="absolute top-4 right-4 p-2 bg-gray-900/50 hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-full transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>

      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 border-2 border-emerald-500 p-1">
          <img
            src={user.image}
            alt="profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Info Section */}
        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold text-white capitalize tracking-tight">
            {user.name || "Unknown User"}
          </h3>
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            {user.role || "Team Member"}
          </p>
        </div>

        {/* Description Section */}
        <div className="mt-4 w-full bg-gray-900/40 rounded-2xl p-4">
          <p className="text-gray-400 text-sm leading-relaxed text-center italic">
            "{user.desc || "No description provided for this user."}"
          </p>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Card;
