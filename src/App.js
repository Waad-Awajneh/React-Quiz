import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
//pages
import Home from "./pages/Home/home";
import ShowQuiz from "./pages/Quiz/showQuiz";
import ShowResult from "./pages/Result/ShowResult";
//redux
import { getAllQuestions } from "./redux/reducers/QuizReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading/Loading";

function App() {
  const { toggleValue } = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();
  const { allQuestions, error, loading } = useSelector(
    (state) => state.QuizReducer
  );

  useEffect(() => {
    if (allQuestions?.length === 0) dispatch(getAllQuestions());
  }, []);

  if (error) return "error ";
  if (loading) return <Loading />;

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
