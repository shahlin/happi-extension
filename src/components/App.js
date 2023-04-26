import './App.css';
import Header from './Header';
import AllQuestions from './questions/AllQuestions';
import SaveButton from './SaveButton';
import { useEffect } from "react";
import { storeAuthKeys, removeAuthKeys, getEmailPromise } from '../utils/AuthUtils';

function App() {
    useEffect(() => {
        // removeAuthKeys(); /* For debugging */
        storeAuthKeys();
    });

    return (
        <div className="Container">
            <Header />
            <AllQuestions />
            <SaveButton />
        </div>
    );
}

export default App;
