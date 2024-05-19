import Welcome from "./components/Welcome";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import GameOver from "./components/GameOver";
import { QuizContext } from "./context/quiz";
import Question from "./components/Question";

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    const [quiz, setQuiz] = useState({
        gameStage: "Start",
    });

    useEffect(() => {
        dispatch({ type: "NEW_GAME" });
    }, []);

    useEffect(() => {
        if (quizState !== undefined) {
            setQuiz(quizState);
        }
        console.log("aqui", quiz);
    }, [quizState]);

    return (
        <div className="App">
            <h1> Quiz de Programação</h1>

            {quiz.gameStage === "Start" && <Welcome />}
            {quiz.gameStage === "Playing" && <Question />}
            {quiz.gameStage === "End" && <GameOver />}
        </div>
    );
}

export default App;
