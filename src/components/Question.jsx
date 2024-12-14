import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "../styles/Question.css";
import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "CHANGE_QUESTION" });
    dispatch({ type: "RESET_ANSWER_SELECTED" }); // Redefine o estado de resposta selecionada
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={handleNextQuestion}>Continuar</button>
      )}
    </div>
  );
};

export default Question;
