import quizLogo from '../assets/quiz-logo.png';
export default function Header() {
  console.log('Header component rendered');
  return <header>
    <img src={quizLogo}/>
    <h1>QuizApp</h1>
  </header>
}