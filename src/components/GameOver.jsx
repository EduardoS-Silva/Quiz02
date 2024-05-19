import React from "react";
import {useContext} from "react";
import Concluido from "../img/concluido.png";
import { QuizContext } from "../context/quiz";
import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext (QuizContext);
    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.lenght}{" "}perguntas</p>
            <img src={Concluido} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    );
};

export default GameOver;