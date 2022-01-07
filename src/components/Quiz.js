import React, { useState } from "react";
import QuizArea from "./QuizArea.js";
import data from "../data/data.js";
import { useParams } from "react-router";
function Quiz() {
  const { quizname } = useParams();
  console.log(quizname);
  console.log(data[`${quizname}`]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(data[`${quizname}`]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  return (
    <div className=" h-48 flex flex-col items-center  ">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">{currentQuiz.module.name}</h1>
      </div>
      <br />
      <div className=" flex justify-around text-xs m-3 w-full text-cyan-500">
        {" "}
        <h3>
          Question:{currentQuestion + 1}/{currentQuiz.module.questions}
        </h3>
        <h3>
          Score : {score}/{currentQuiz.module.questions}
        </h3>
      </div>
      <QuizArea
        quizname={quizname}
        quiz={currentQuiz.questions[currentQuestion]}
        score={score}
        setScore={setScore}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        totalQues={currentQuiz.module.questions}
        answered={answered}
        setAnswered={setAnswered}
      />
    </div>
  );
}

export default Quiz;
