import React, { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

export default function User() {
  const [isLoggedIn, setIsLoggedIn] = useState<AuthUser | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState<AuthUser>({} as AuthUser);

  const handleLoggedIn = () => {
    setIsLoggedIn({
        name: 'Jubayer Alam Khan',
        email: 'jubayer@gmail.com',
    });
  };

  const handleLoggedOut = () => {
    setIsLoggedIn(null);
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
      <div>User name is {isLoggedIn?.name}</div>
      <div>User email is {isLoggedIn?.email}</div>
    </div>
  );
}
