import React from "react";
import { Link } from "react-router-dom";
function Home({ username, setUsername }) {
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="flex flex-col align-center mx-auto text-center justify-center ">
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={usernameHandler}
          className="text-indigo-900 border  bg-slate-300 w-44 rounded-3xl p-1 m-2 text-center"
        />
      </div>
      <div className="my-4">
        <div className="">
          <h1 className="text-blue-500">Coding</h1>
          <div className="flex justify-around align-center flex-col md:flex-row">
            <Link
              className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
              to="/quiz/react"
            >
              React
            </Link>
            <Link
              className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4   m-2   "
              to="/quiz/oops"
            >
              Object Oriented Programming
            </Link>
            <Link
              className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4   m-2  "
              to="/quiz/git"
            >
              Git
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <h1 className="text-blue-500">Show Trivia</h1>
        <div className="flex  justify-around align-center flex-col md:flex-row">
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/got"
          >
            Game Of Thrones
          </Link>
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/office"
          >
            Office US
          </Link>
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/himym"
          >
            How I Met Your Mother
          </Link>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-blue-500">STEM</h1>
        <div className="flex justify-around align-center flex-col md:flex-row">
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/biology"
          >
            Biology
          </Link>
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/math"
          >
            Math
          </Link>
          <Link
            className="bg-sky-900 hover:bg-sky-700 p-2 md:rounded-3xl md:px-4 m-2"
            to="/quiz/reasoning"
          >
            Logical Reasoning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
