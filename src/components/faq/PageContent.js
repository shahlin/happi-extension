import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QuestionAnswerList } from './QuestionAnswersList';
import './PageContent.css'
import { useState } from 'react';

function PageContent() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="FaqPageContent">
            <h1>Frequently Asked Questions</h1>
            <p className='FaqSubtitle'>Answers for some of the questions you might have. For the ones you can't find, please <u>contact the developer</u>.</p>

            <div className='FaqDataContainer'>
                {
                    QuestionAnswerList.map((entry, index) => {
                        return (<Accordion
                            elevation={0}
                            disableGutters={true}
                            className='FaqDataAccordion'
                            expanded={expanded === ('panel' + index)}
                            onChange={handleChange(('panel' + index))}
                            sx={{
                                '& .MuiTypography-root': { fontFamily: 'Dongle' },
                                '.MuiAccordionSummary-root, .MuiAccordionDetails-root': { padding: 0 },
                                '&:before': { display: 'none', } // To remove the bottom border
                            }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={"panel" + (index + 1) + "a-content"}
                                id={"panel" + (index + 1) + "a-header"}
                            >
                                <Typography sx={{
                                    fontSize: '32px',
                                    // fontWeight: 'lighter',
                                }}>{entry.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginBottom: '15px' }}>
                                <Typography sx={{
                                    fontSize: '22px',
                                    fontWeight: 'lighter',
                                    lineHeight: 1.2,
                                }}>
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