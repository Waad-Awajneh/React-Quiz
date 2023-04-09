import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import ShowQuiz from "./pages/Quiz/showQuiz";
import ShowResult from "./pages/Result/ShowResult";
import { getAllQuestions } from "./redux/reducers/QuizReducer/action";

function App() {
  const { toggleValue } = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();
  const { allQuestions, error, loading } = useSelector(
    (state) => state.QuizReducer
  );
  // console.log(allQuestions?.length);
  useEffect(() => {
    if (allQuestions?.length === 0) dispatch(getAllQuestions());
  }, []);

  if (error) return "error ";
  if (loading) return "LOading... ";

  return (
    <div className={toggleValue ? "dark" : "light"}>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/quiz/:category" element={<ShowQuiz />} />
        <Route path="/quizResult" element={<ShowResult />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
