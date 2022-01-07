import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function QuizArea({
  quiz,
  score,
  setScore,
  currentQuestion,
  setCurrentQuestion,
  totalQues,
  answered,
  setAnswered,
}) {
  const [displayAnswer, setDisplayAnswer] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const optionClickHandler = (e) => {
    if (quiz.answers[quiz.correct_answer] === e.target.innerText) {
      console.log("Answer Correct");
      if (!answered) {
        setDisplayAnswer(
          ` Your Answer was correct , ${quiz.answers[quiz.correct_answer]}`
        );
        setScore(score + 1);
        setAnswered(true);
      }
    } else {
      if (!answered) {
        setDisplayAnswer(
          ` Incorrect Answer. Correct Answer: ${
            quiz.answers[quiz.correct_answer]
          }`
        );

        setAnswered(true);
      }
    }
  };
  useEffect(() => {
    console.log(answered);
    if (answered) {
      if (currentQuestion + 1 > totalQues - 1) {
        setIsComplete(true);
        return;
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
        }, 1750);
      }
    }
  }, [answered]);

  useEffect(() => {
    setAnswered(false);
    setDisplayAnswer("");
  }, [currentQuestion]);

  return (
    <>
      <div className=" bg-slate-800 flex  flex-col items-center max-w-md p-5  mr-3 ml-3 border  border-radius rounded-md">
        <div>
          <h2>
            {quiz.number}. {quiz.question}
          </h2>
          <h3 className="text-cyan-500 text-md flex align-center justify-center">
            {displayAnswer}
          </h3>
        </div>

        <div>
          {quiz.answers.map((a, index) => {
            return (
              <div
                key={index}
                className="options bg-indigo-900 m-2 p-2 px-5 w-48 rounded-3xl cursor-pointer border "
                onClick={optionClickHandler}
              >
                <h3>{`${a}`}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/leaderboard">
        <button className="bg-blue-700 m-2 p-2 px-5 w-48 rounded-3xl cursor-pointer border">
          Submit
        </button>
      </Link>
    </>
  );
}

export default QuizArea;
