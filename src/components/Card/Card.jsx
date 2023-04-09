import { useNavigate } from "react-router-dom";
//redux
import { getSingleQuiz } from "../../redux/reducers/QuizReducer/action";
import { useDispatch } from "react-redux";

export default function Card({ category_name }) {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const goToSingleQuiz = () => {
    dispatch(getSingleQuiz(category_name));
    nav(`/quiz/${category_name}`);
  };

  return (
    <div className={`quiz`} onClick={goToSingleQuiz}>
      <h4>{category_name}</h4>

      <div className="state">
        <span className={`blueBar `}></span>
      </div>
    </div>
  );
}
