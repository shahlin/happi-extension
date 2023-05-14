import './App.css';
import Header from './Header';
import AllQuestions from './questions/AllQuestions';
import SyncStatus from './SyncStatus';
import SaveButton from './SaveButton';
import StatusAlert from './StatusAlert';
import { useState, useEffect } from "react";
import { storeAuthKeys } from '../utils/AuthUtils';

function App() {
    const [answers, setAnswers] = useState({});
    const [showStatusAlert, setShowStatusAlert] = useState(false);
    const [successStatus, setSuccessStatus] = useState(false);

    useEffect(() => {
        storeAuthKeys();
    }, []);

    return (
        <div className="Container">
            <Header />
            <AllQuestions setAnswers={setAnswers} />
            <SyncStatus />
            <SaveButton answers={answers} setSuccessStatus={setSuccessStatus} setShowStatusAlert={setShowStatusAlert} />

            {/* TODO: Fix error and success alerts showing up on success scenario */}
            <StatusAlert show={showStatusAlert} status={successStatus} />
        </div>
    );
}

export default App;
