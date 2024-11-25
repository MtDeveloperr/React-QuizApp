import { useState } from 'react';
import QUESTIONS from '../questions.js'
import QuizComplete from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    console.log('Quiz component rendered');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    function handleSelectAnswer(answer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, answer]
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={QuizComplete} alt='Trophy Icon'/>
            <h2>Quiz completed!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

    return <>
        <div id="quiz">

            <div id="question">
                <QuestionTimer/>
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                    <ul id="answers">
                        {shuffledAnswers.map((answer) => (
                            <li key={answer} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)}>
                                    {answer}
                                </button>
                            </li>
                        )


                        )}
                    </ul>
                </h2>
            </div>
        </div>
    </>
}