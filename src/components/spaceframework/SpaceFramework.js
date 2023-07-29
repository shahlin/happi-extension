import PageContent from './PageContent';
import Page from '../common/Page';

function SpaceFramework() {
    return (
        <div className='PageContent'>
            <Page pageContent={<PageContent />} />
        </div >
    );
}

export default SpaceFramework;