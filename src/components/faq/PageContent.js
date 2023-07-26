import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import './PageContent.css'
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QuestionAnswerList } from './QuestionAnswersList';

function PageContent() {
    return (
        <div className="FaqPageContent">
            <h1>Frequently Asked Questions</h1>
            <p className='FaqSubtitle'>Answers for some of the questions you might have. For the ones you can't find, please <u>contact the developer</u>.</p>

            <div className='FaqDataContainer'>
                {
                    QuestionAnswerList.map((entry, index) => {
                        return (<Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={"panel" + (index + 1) + "a-content"}
                                id={"panel" + (index + 1) + "a-header"}
                            >
                                <Typography>{entry.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {entry.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>)
                    })
                }
            </div>
        </div >
    );
}

export default PageContent;