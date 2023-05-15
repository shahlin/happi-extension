import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import { handleAnswersIfExistsInStorage } from '../../utils/AnswerUtils';
import './TimeOfDayQuestion.css'

function TimeOfDayQuestion(props) {
    const [answer, setAnswer] = useState();

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
        }
    };

    return (
        <div className='TimeOfDayQuestionContainer'>
            <p>What time of the day were you most productive?</p>

            <div className='TimeOfDayAnswersContainer'>
                <ToggleButtonGroup
                    className='TimeOfDayAnswerButtonGroup'
                    value={answer}
                    onChange={handleAnswer}
                    aria-label='answers'
                    exclusive
                >
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='none' aria-label='none'>
                        <Tooltip title='None' arrow>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="35" height="35" rx="20" fill="#D3374E" />
                            </svg>
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='morning' aria-label='morning'>
                        <Tooltip title='In the morning' arrow>
                            <img src="/morning.png" draggable="false" alt='In the morning' />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='afternoon' aria-label='afternoon'>
                        <Tooltip title='In the afternoon' arrow>
                            <img src="/afternoon.png" draggable="false" alt='In the afternoon' />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='evening' aria-label='evening'>
                        <Tooltip title='In the evening' arrow>
                            <img src="/evening.png" draggable="false" alt='In the evening' />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='night' aria-label='night'>
                        <Tooltip title='At night' arrow>
                            <img src="/night.png" draggable="false" alt='At night' />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton className='TimeOfDayAnswerButton' size='small' value='equal' aria-label='equal'>
                        <Tooltip title='Equally throughout the day' arrow>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="35" height="35" rx="20" fill="#2EAF6E" />
                            </svg>
                        </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div >
    )
}

export default TimeOfDayQuestion;