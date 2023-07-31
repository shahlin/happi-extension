import '../common/Page.css'
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { contactSources } from './ContactSources';
import { NavLink } from 'react-router-dom';

const cardSx = {
    width: '250px',
    height: '185px',
    borderRadius: '10px',
    boxShadow: 'none',
    border: '1px solid #EEEEEE'
}

function PageContent() {
    return (
        <div className="InfoPageContent">
            <h1>Contact the Developer</h1>
            <p className='InfoPageSubtitle'>If you have any questions, suggestions, issues, any feedback or if you just wanna say hi! 👋🏻</p>

            <div className='InfoPageContentDataContainer'>
                <h2>Find me on</h2>
                <Grid container>
                    {
                        contactSources.map((source, index) => {
                            return (
                                <Grid item margin={'10px'} marginLeft={'0'}>
                                    <a className='ContactFindMeOnLink' target='_blank' href={source.link}>
                                        <Card className='ContactFindMeOnCard' sx={cardSx}>
                                            <CardContent>
                                                <div className='ContactFindMeOnIconContainer'>
                                                    <img className='ContactFindMeOnIcon' src={source.img} />
                                                </div>
                                                <Typography component={'h3'}>
                                                    {source.title}
                                                </Typography>
                                                <Typography>
                                                    {source.subTitle}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <div className='ContactReadMoreInfoContainer'>
                    <p>
                        Please consider reading the FAQ if you're having any questions about the usage of <b>Happi</b> & if you're wondering what the questions you record every day mean, head over to <NavLink to="/metrics">Metrics</NavLink>.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default PageContent;