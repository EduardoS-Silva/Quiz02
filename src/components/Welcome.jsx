import Quiz from "../img/paisagem.png";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja Bem-vindo ao Quiz!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                Iniciar
            </button>
            <img src={Quiz} alt="início do Quiz" />
        </div>
    );
};

export default Welcome;
