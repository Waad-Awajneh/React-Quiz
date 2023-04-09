import * as CONSTANTS from "./constants";

const initialState = {
  allQuestions: [],
  loading: false,
  error: null,
  category_name: new Set(),
  singleQuiz: [],
  answers: [],
  result: 0,
  review: false,
};

export default function QuizReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        allQuestions: action.payload,
      };
    case CONSTANTS.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CONSTANTS.GET_CATEGORY_NAME:
      let category = new Set();

      state.allQuestions?.forEach((element) =>
        category.add(element.category_name)
      );

      return {
        ...state,
        category_name: category,
      };

    case CONSTANTS.GET_SINGLE_QUIZ:
      return {
        ...state,
        singleQuiz: state.allQuestions?.filter(
          (element) => element.category_name == action.payload
        ),
      };
    case CONSTANTS.SET_ANSWERS_ARRAY:
      return {
        ...state,
        answers: new Array(state.singleQuiz.length).fill("noAnswer"),
      };
    case CONSTANTS.SET_ANSWER:
      console.log(action.payload);
      const { mark, correctAnswer, answerValue, questionIndex } =
        action.payload;
      return {
        ...state,
        answers: state.answers?.map((ans, index) =>
          index === questionIndex
            ? {
                mark: mark,
                correctAnswer: correctAnswer,
                answerValue: answerValue,
              }
            : ans
        ),
      };

    case CONSTANTS.GET_RESULT:
      return {
        ...state,
        result: state.answers.filter((ans) =>
          ans == "noAnswer" ? false : ans.mark
        ).length,
      };
    case CONSTANTS.RESET_QUIZ_AND_ANSWER:
      return {
        ...state,
        result: 0,
        singleQuiz: {},
        answers: [],
        review: false,
      };
    case CONSTANTS.RESTART_QUIZ:
      return {
        ...state,
        result: 0,
        answers: new Array(state.singleQuiz.length).fill("noAnswer"),
        review: false,
      };
    case CONSTANTS.SET_REVIEW:
      return {
        ...state,
        review: action.payload,
      };

    default:
      return state;
  }
}
