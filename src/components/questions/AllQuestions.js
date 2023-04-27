import OverallProductivityQuestion from "./OverallProductivityQuestion";
import TimeOfDayQuestion from "./TimeOfDayQuestion";
import GenericQuestion from "./GenericQuestion";
import Divider from '@mui/material/Divider';
import './AllQuestions.css'

function Questions(props) {

    function handleAnswerChange(qkey, aValue) {
        props.setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [qkey]: aValue
        }));
    }

    return (
        <div className="AllQuestionsContainer">
            <OverallProductivityQuestion qkey="overall_productivity" onAnswerChange={handleAnswerChange} />
            <TimeOfDayQuestion qkey="productive_time_of_day" onAnswerChange={handleAnswerChange} />
            <Divider sx={{ marginBottom: '15px' }} variant="middle" />
            <GenericQuestion question="Were you distracted?" qkey="distractions_frequency" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="Did you work with other people?" qkey="worked_with_others_frequency" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="Were your interrupted during work?" qkey="interruptions_frequency" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="Did you do a lot of work?" qkey="amount_of_work_done" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="Did you do high quality work?" qkey="high_quality_work_done" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="Did you take enough breaks?" qkey="breaks_frequency" onAnswerChange={handleAnswerChange} />
            <GenericQuestion question="How was your sleep last night?" qkey="sleep_quality" onAnswerChange={handleAnswerChange} answers={[{ text: 'Good', value: 'good' }, { text: 'Average', value: 'average' }, { text: 'Bad', value: 'bad' }]} />
        </div>
    );
}

export default Questions;