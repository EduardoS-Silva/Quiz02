import { useContext } from "react";
import "./Option.css";
import { QuizContext } from "../context/quiz";

const Option = ({ option, selectOption, answer }) => {
    const [quizState] = useContext(QuizContext);

    const isCorrect = quizState.answerSelected && option === answer;
    const isWrong = quizState.answerSelected && option !== answer && option === quizState.selectedAnswer;

    return (
        <div
            className={`option ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            onClick={selectOption}
        >
            <p>{option}</p>
        </div>
    );
};

export default Option;
