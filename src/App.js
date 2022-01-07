import Quiz from "./components/Quiz.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Leaderboard from "./components/Leaderboard.js";
import react, { useState } from "react";

import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("Guest");
  return (
    <div className="App  min-h-screen bg-slate-900 text-slate-200">
      <BrowserRouter>
        <Nav username={username} />
        <Switch>
          <Route path="/quiz/:quizname">
            <Quiz username={username} />
          </Route>
          <Route path="/leaderboard/:quizname">
            <Leaderboard username={username} />
          </Route>
          <Route path="/">
            <Home username={username} setUsername={setUsername} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
