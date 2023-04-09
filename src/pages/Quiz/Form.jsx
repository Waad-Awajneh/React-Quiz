import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../../redux/reducers/QuizReducer/action";
import "./reviewStyle.css";
export default function Form({ questionInfo, questionIndex, resetForm }) {
  const myRef = useRef();
  const dispatch = useDispatch();
  const { answers, review } = useSelector((state) => state.QuizReducer);
  function colorChoiceBasedOnQuestionAnswer(choice) {
    if (choice === answers[questionIndex].correctAnswer) return "correct";
    else if (choice === answers[questionIndex].answerValue) return "wrong";
    else return "normalChoice";
  }
  useEffect(() => {
    console.log(myRef.current);
    myRef.current.reset();
  }, [resetForm]);

  return (
    <>
      <form
        ref={myRef}
        className="inputs form"
        onClick={(e) =>
          dispatch(
            setAnswer(questionIndex, e.target.value, questionInfo.answer)
          )
        }
      >
        <div
          className={`singleInput  ${
            review && colorChoiceBasedOnQuestionAnswer(questionInfo?.choices[0])
          }`}
        >
          <label htmlFor="ChoiceA">{questionInfo?.choices[0]}</label>
          <input
            type="radio"
            id="ChoiceA"
            name="quiz"
            value={questionInfo?.choices[0]}
            required
            disabled={review}
            checked={
              questionInfo?.choices[0] === answers[questionIndex].answerValue
            }
          />
        </div>
        <div
          className={`singleInput  ${
            review && colorChoiceBasedOnQuestionAnswer(questionInfo?.choices[1])
          }`}
        >
          <label htmlFor="ChoiceB">{questionInfo?.choices[1]}</label>
          <input
            type="radio"
            id="ChoiceB"
            name="quiz"
            value={questionInfo?.choices[1]}
            required
            disabled={review}
            checked={
              questionInfo?.choices[1] === answers[questionIndex].answerValue
            }
          />
        </div>
        <div
          className={`singleInput  ${
            review && colorChoiceBasedOnQuestionAnswer(questionInfo?.choices[2])
          }`}
        >
          <label htmlFor="ChoiceC">{questionInfo?.choices[2]}</label>
          <input
            type="radio"
            id="ChoiceC"
            name="quiz"
            value={questionInfo?.choices[2]}
            required
            disabled={review}
            checked={
              questionInfo?.choices[2] === answers[questionIndex].answerValue
            }
          />
        </div>
        <div
          className={`singleInput  ${
            review && colorChoiceBasedOnQuestionAnswer(questionInfo?.choices[3])
          }`}
        >
          <label htmlFor="ChoiceD">{questionInfo?.choices[3]}</label>
          <input
            type="radio"
            id="ChoiceD"
            name="quiz"
            value={questionInfo?.choices[3]}
            required
            disabled={review}
            checked={
              questionInfo?.choices[3] === answers[questionIndex].answerValue
            }
          />
        </div>
      </form>
    </>
  );
}
