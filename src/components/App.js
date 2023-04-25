import './App.css';
import Header from './Header';
import AllQuestions from './questions/AllQuestions';
import SaveButton from './SaveButton';
import { useEffect } from "react";
import { getLoggedInUserEmail } from '../utils/AuthUtils';

function App() {
    useEffect(() => {
        console.log(getLoggedInUserEmail());
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
