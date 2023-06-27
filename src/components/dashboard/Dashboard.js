import './Dashboard.css';
import PageContent from './PageContent';
import Page from '../common/Page';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <Page pageContent={<PageContent />} />
        </div >
    );
}

export default Dashboard;