import { createContext, useReducer, useEffect } from "react";
import questions from "../data/questions";

// Validação das perguntas
const validateQuestions = (questions) => {
  return questions.map((question) => ({
    ...question,
    options:
      question.options && question.options.length > 0 ? question.options : [],
    answer: question.answer || "",
  }));
};

const validatedQuestions = validateQuestions(questions);

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions: validatedQuestions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = [...state.questions].sort(
        () => Math.random() - 0.5
      );
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      const endGame = !state.questions[nextQuestion];

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const { answer, option } = action.payload;
      const isCorrect = answer === option;

      return {
        ...state,
        score: state.score + (isCorrect ? 1 : 0),
        answerSelected: true,
      };

    case "RESET_ANSWER_SELECTED":
      return {
        ...state,
        answerSelected: false,
      };

    case "LOAD_STATE":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizState, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    const storedState = localStorage.getItem("quizState");
    if (storedState) {
      dispatch({ type: "LOAD_STATE", payload: JSON.parse(storedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizState", JSON.stringify(quizState));
  }, [quizState]);

  return (
    <QuizContext.Provider value={[quizState, dispatch]}>
      {children}
    </QuizContext.Provider>
  );
};
