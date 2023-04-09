import * as CONSTANTS from "./constants";
export const getAllQuestions = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  try {
    const response = await fetch(
      "https://json.extendsclass.com/bin/ac3800e6be7e"
    );
    const data = await response.json();

    if (data) {
      dispatch({ type: CONSTANTS.FETCH_SUCCESS, payload: data.quiz });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.FETCH_FAILED, payload: error });
  }
};

export const getAllCategoryName = () => (dispatch) => {
  dispatch({ type: CONSTANTS.GET_CATEGORY_NAME });
};

export const getSingleQuiz = (quizType) => (dispatch) => {
  dispatch({ type: CONSTANTS.GET_SINGLE_QUIZ, payload: quizType });
  dispatch({ type: CONSTANTS.SET_ANSWERS_ARRAY });
};

export const setAnswer =
  (questionIndex, answerValue, correctAnswer) => (dispatch) => {
    dispatch({
      type: CONSTANTS.SET_ANSWER,
      payload: {
        questionIndex,
        answerValue,
        correctAnswer,
        mark: answerValue == correctAnswer,
      },
    });
  };

export const showResult = () => (dispatch) => {
  dispatch({ type: CONSTANTS.GET_RESULT });
};
export const resetQuizAndAnswer = () => (dispatch) => {
  dispatch({ type: CONSTANTS.RESET_QUIZ_AND_ANSWER });
};
export const setReview = (value) => (dispatch) => {
  dispatch({ type: CONSTANTS.SET_REVIEW, payload: value });
};
export const restartQuiz = (value) => (dispatch) => {
  dispatch({ type: CONSTANTS.RESTART_QUIZ });
};
