import { useEffect } from "react";
//components
import Card from "../../components/Card/Card";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryName } from "../../redux/reducers/QuizReducer/action";
//style
import "../style.css";

export default function Home() {
  const dispatch = useDispatch();
  const { category_name } = useSelector((state) => state.QuizReducer);

  useEffect(() => {
    dispatch(getAllCategoryName());
  }, []);

  return (
    <div className="all-component">
      <div className="workspace">
        <div>
          <p>
            Welcome to <span className="color">Estarta Quizzes Organizer</span>
            <br /> We are thrilled to have you on Estarta Quizzer, Enjoy.
          </p>
          <div className="all-quiz">
            {Array.from(category_name)?.map((category_name) => (
              <Card category_name={category_name} key={category_name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
