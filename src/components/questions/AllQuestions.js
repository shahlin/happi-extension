import OverallProductivityQuestion from "./OverallProductivityQuestion";
import TimeOfDayQuestion from "./TimeOfDayQuestion";
import GenericQuestion from "./GenericQuestion";
import Divider from '@mui/material/Divider';
import './AllQuestions.css'

function Questions() {
    return (
        <div className="AllQuestionsContainer">
            <OverallProductivityQuestion />
            <TimeOfDayQuestion />
            <Divider sx={{ marginBottom: '15px' }} variant="middle" />
            <GenericQuestion question="Were you distracted?" />
            <GenericQuestion question="Did you work with other people?" />
            <GenericQuestion question="Were your interrupted during work?" />
            <GenericQuestion question="Did you do a lot of work?" />
            <GenericQuestion question="Did you do high quality work?" />
            <GenericQuestion question="Did you take enough breaks?" />
            <GenericQuestion question="How was your sleep last night?" answers={[{ text: 'Good', value: 'good' }, { text: 'Average', value: 'average' }, { text: 'Bad', value: 'bad' }]} />
        </div>
    );
}

export default Questions;