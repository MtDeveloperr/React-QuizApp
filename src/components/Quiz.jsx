import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js'
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    console.log('Quiz component rendered');
    const [userAnswers, setUserAnswers] = useState([]);


    const activeQuestionIndex = userAnswers.length ;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, answer]
        });
    }, [activeQuestionIndex]);

    const handleSkipQuestion = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return <>
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipQuestion}
            />

        </div>
    </>
}