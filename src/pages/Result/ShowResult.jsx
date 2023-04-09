import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  restartQuiz,
  setReview,
} from "../../redux/reducers/QuizReducer/action";

import "../style.css";
export default function ShowResult() {
  const { result, singleQuiz } = useSelector((state) => state.QuizReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelReturn = () => {
    dispatch(restartQuiz());
    navigate(`/quiz/${singleQuiz[0].category_name}`);
  };
  const handelReview = () => {
    dispatch(setReview(true));
    navigate(`/quiz/${singleQuiz[0].category_name}`);
  };

  return (
    <div className="all-component">
      <div className="resultContainer">
        <div className=" result container">
          <h2>
            You Got<span className="color"> {result} /10</span>
          </h2>
          <div className="buttonsContainer">
            <button onClick={handelReturn}>Start OVER</button>
            <button onClick={handelReview}>Review Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
