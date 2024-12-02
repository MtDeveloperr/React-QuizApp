import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import SignalRComponent from "./components/SignalRComp.jsx";


function App() {
    return <>
        <Header />
        <SignalRComponent />
        <main>
            <Quiz />
        </main>
    </>
}

export default App;
