import React, { useState } from "react";

export default function LogedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };

  const handleLoggedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
        onClick={handleLoggedIn}
      >
        Login
      </button>
      <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
        onClick={handleLoggedOut}
      >
        Logout
      </button>
      <div>User in {isLoggedIn ? 'Logeged in' : 'Logged out'}</div>
    </div>
  );
}
