import { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './GenericQuestion.css'
import { handleAnswersIfExistsInStorage } from '../../utils/AnswerUtils';

function GenericQuestion(props) {
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

    function getAnswers(answers) {
        return (answers && answers.length > 0) ? answers : [
            {
                text: 'Yes',
                value: 'yes'
            },
            {
                text: 'Mostly',
                value: 'mostly'
            },
            {
                text: 'Somewhat',
                value: 'somewhat'
            },
            {
                text: 'No',
                value: 'no'
            },
        ]
    }

    return (
        <div className='GenericQuestion'>
            <span className='GenericQuestionText'>
                {props.question}
            </span>
            <ToggleButtonGroup
                className='GenericAnswerButtonGroup'
                value={answer}
                onChange={handleAnswer}
                aria-label='answers'
                size='small'
                exclusive
            >
                {getAnswers(props.answers).map(answer => {
                    return (
                        <ToggleButton key={answer.value} size='small' value={answer.value} aria-label={answer.value}>
                            <span className='GenericAnswerButtonText'>{answer.text}</span>
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </div >
    );
}

export default GenericQuestion;