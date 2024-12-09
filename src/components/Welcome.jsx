import React from 'react'
import "../styles/Welcome.css";
import Quiz from "../img/quiz.svg";

export const Welcome = () => {
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}
