import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  restartQuiz,
  setReview,
} from "../../redux/reducers/QuizReducer/action";
//style
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
          {result == 10 && <h1>Super Work</h1>}
          {result < 10 && result >= 8 && <h1> Excellent</h1>}
          {result < 8 && result >= 5 && <h1> Good Work </h1>}
          {result < 5 && <h1>Try Agin</h1>}
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
