import { useState } from "react";
//components
import Form from "./Form";
//stepper mui
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  restartQuiz,
  showResult,
} from "../../redux/reducers/QuizReducer/action";
//react-router-dom
import { useNavigate } from "react-router-dom";
//style
import "../style.css";

export default function ShowQuiz() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [resetForm, setResetForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleQuiz, answers, review } = useSelector(
    (state) => state.QuizReducer
  );
  const maxSteps = singleQuiz.length;

  const handleNext = () => {
    setResetForm(!resetForm);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    dispatch(showResult());
    navigate("/quizResult");
  };

  const handleRestart = () => {
    setActiveStep(0);
    dispatch(restartQuiz());
    navigate(`/quiz/${singleQuiz[activeStep].category_name}`);
  };

  return (
    <div className="all-component">
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          className="headingBox"
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>
            <h3>{singleQuiz[activeStep].question}</h3>
          </Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          <Form
            questionInfo={singleQuiz[activeStep]}
            questionIndex={activeStep}
            resetForm={resetForm}
          />
        </Box>
        <MobileStepper
          className="StepperBox"
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            activeStep === maxSteps - 1 ? (
              review ? (
                <Button size="small" onClick={handleRestart} className="btn">
                  Start Over
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              ) : (
                <Button
                  size="small"
                  onClick={handleSubmit}
                  disabled={answers[activeStep] === "noAnswer"}
                  className="btn"
                >
                  Submit
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              )
            ) : (
              <Button
                size="small"
                onClick={handleNext}
                disabled={answers[activeStep] === "noAnswer"}
                className="btn"
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            )
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className="btn"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}
