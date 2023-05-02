import './App.css';
import Header from './Header';
import AllQuestions from './questions/AllQuestions';
import SyncStatus from './SyncStatus';
import SaveButton from './SaveButton';
import { useState, useEffect } from "react";
import { storeAuthKeys } from '../utils/AuthUtils';

function App() {
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        storeAuthKeys();
    }, []);

    return (
        <div className="Container">
            <Header />
            <AllQuestions setAnswers={setAnswers} />
            <SyncStatus />
            <SaveButton answers={answers} />
        </div>
    );
}

export default App;
