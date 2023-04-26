import './App.css';
import Header from './Header';
import AllQuestions from './questions/AllQuestions';
import SaveButton from './SaveButton';
import { useState, useEffect } from "react";
import { storeAuthKeys, removeAuthKeys } from '../utils/AuthUtils';

function App() {
    const [answers, setAnswers] = useState({});

    // TODO: Gets executed everytime an answer is changed, check why
    useEffect(() => {
        // removeAuthKeys(); /* For debugging */
        storeAuthKeys();
    });

    function handleAnswerChange(qkey, aValue) {
        setAnswers({
            ...answers,
            [qkey]: aValue
        });
    }

    return (
        <div className="Container">
            <Header />
            <AllQuestions onAnswerChange={handleAnswerChange} />
            <SaveButton answers={answers} />
        </div>
    );
}

export default App;
