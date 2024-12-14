import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
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
      const reorderedQuestions = questions.sort(() => Math.random() - 0.5);
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
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state; // Evita múltiplas seleções

      const answer = action.payload.answer;
      const option = action.payload.option;
      const isCorrect = answer === option;

      return {
        ...state,
        score: state.score + (isCorrect ? 1 : 0),
        answerSelected: true, // Atualiza para indicar que uma resposta foi selecionada
      };

    case "RESET_ANSWER_SELECTED":
      return {
        ...state,
        answerSelected: false, // Redefine o estado de resposta selecionada
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
