import PageContent from './PageContent';
import Page from '../common/Page';

function Dashboard() {
    return (
        <div className='PageContent'>
            <Page pageContent={<PageContent />} />
        </div >
    );
}

export default Dashboard;