import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import { handleAnswersIfExistsInStorage } from '../../utils/AnswerUtils';
import './OverallProductivityQuestion.css'

function OverallProductivityQuestion(props) {
    const [answer, setAnswer] = useState();

    // TODO: Find a better way to do this
    const [isShownUnhappyAnswer, setShownUnhappyAnswer] = useState(true)
    const [isShownNeutralAnswer, setShownNeutralAnswer] = useState(true)
    const [isShownHappyAnswer, setShownHappyAnswer] = useState(true)

    useEffect(() => {
        handleAnswersIfExistsInStorage((existingAnswer) => {
            setAnswer(existingAnswer);
            props.onAnswerChange(props.qkey, existingAnswer);
        }, props.qkey);
    }, []);

    const handleAnswer = (event, newAnswer) => {
        if (newAnswer !== null) {
            setAnswer(newAnswer);
            props.onAnswerChange(props.qkey, newAnswer);

            highlightSelectedAnswer(newAnswer);
        }
    };

    function highlightSelectedAnswer(answer) {
        setShownUnhappyAnswer(false);
        setShownNeutralAnswer(false);
        setShownHappyAnswer(false);

        if (answer == 'unhappy') { setShownUnhappyAnswer(true); }
        if (answer == 'neutral') { setShownNeutralAnswer(true); }
        if (answer == 'happy') { setShownHappyAnswer(true); }
    }

    return (
        <div className='OverallProductivityQuestionContainer'>
            <p>How'd you do today?</p>

            <div className='OverallProductivityAnswersContainer'>
                <ToggleButtonGroup
                    className='OverallProductivityAnswerButtonGroup'
                    value={answer}
                    onChange={handleAnswer}
                    aria-label='answers'
                    exclusive
                >
                    <ToggleButton
                        onMouseEnter={() => { if (!answer) { setShownHappyAnswer(false); setShownNeutralAnswer(false); setShownUnhappyAnswer(true); } }}
                        onMouseLeave={() => { if (!answer) { setShownHappyAnswer(true); setShownNeutralAnswer(true); setShownUnhappyAnswer(true); } }}
                        className={`OverallProductivityAnswerButton ${isShownUnhappyAnswer ? '' : 'UnselectedToggleOption'}`}
                        size='small'
                        value='unhappy'
                        aria-label='unhappy'
                    >
                        <Tooltip title='Not so good' arrow>
                            <svg width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 5C0 2.23858 2.23858 0 5 0H33.3333V33.3333H5C2.23858 33.3333 0 31.0948 0 28.3333V5Z" fill="#D3374E" />
                                <rect x="9.33334" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <rect x="20.6667" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <path d="M11.3333 22.4335C13.1111 21.1002 17.7333 19.2335 22 22.4335" stroke="#AD2D46" stroke-width="3" />
                            </svg>
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton
                        onMouseEnter={() => { if (!answer) { setShownHappyAnswer(false); setShownNeutralAnswer(true); setShownUnhappyAnswer(false); } }}
                        onMouseLeave={() => { if (!answer) { setShownHappyAnswer(true); setShownNeutralAnswer(true); setShownUnhappyAnswer(true); } }}
                        className={`OverallProductivityAnswerButton ${isShownNeutralAnswer ? '' : 'UnselectedToggleOption'}`}
                        size='small'
                        value='neutral'
                        aria-label='neutral'
                    >
                        <Tooltip title='Average' arrow>
                            <svg width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.333344" width="33.3333" height="33.3333" fill="#FDC70E" />
                                <rect x="9.66666" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <rect x="21" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <path d="M12.3333 21.3334C13.7917 21.3334 15.5417 21.3334 21.6667 21.3334" stroke="#D39517" stroke-width="3" />
                            </svg>
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton
                        onMouseEnter={() => { if (!answer) { setShownHappyAnswer(true); setShownNeutralAnswer(false); setShownUnhappyAnswer(false); } }}
                        onMouseLeave={() => { if (!answer) { setShownHappyAnswer(true); setShownNeutralAnswer(true); setShownUnhappyAnswer(true); } }}
                        className={`OverallProductivityAnswerButton ${isShownHappyAnswer ? '' : 'UnselectedToggleOption'}`}
                        size='small'
                        value='happy'
                        aria-label='happy'
                    >
                        <Tooltip title='Amazing' arrow>
                            <svg width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666656 0H29C31.7614 0 34 2.23858 34 5V28.3333C34 31.0948 31.7614 33.3333 29 33.3333H0.666656V0Z" fill="#2EAF6E" />
                                <rect x="10" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <rect x="21.3333" y="11.3334" width="3.33333" height="4.66667" rx="1.66667" fill="#1F3135" />
                                <path d="M12 20.6667C13.7778 22 18.4 23.8667 22.6667 20.6667" stroke="#238C56" stroke-width="3" />
                            </svg>
                        </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}

export default OverallProductivityQuestion