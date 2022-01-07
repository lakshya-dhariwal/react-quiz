import React from "react";
import { useParams } from "react-router";
function Leaderboard() {
  const { quizname } = useParams();
  return (
    <div>
      <h1> Leaderboard for {quizname}</h1>
    </div>
  );
}

export default Leaderboard;
