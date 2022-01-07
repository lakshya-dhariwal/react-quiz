import React from "react";
import { Link } from "react-router-dom";
function Nav({ username }) {
  return (
    <div className=" bg-sky-900 h-10 w-full p-2 mb-2 flex justify-between text-center">
      <h1 className="bg-sky-900 hover:text-blue-200">
        <Link className="bg-sky-900" to="/">
          Quizz
        </Link>
      </h1>
      <h2 className="bg-sky-900 ">{username}</h2>
    </div>
  );
}

export default Nav;
