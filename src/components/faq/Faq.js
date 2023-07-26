import PageContent from './PageContent';
import Page from '../common/Page';

function Faq() {
    return (
        <div className='PageContent'>
            <Page pageContent={<PageContent />} />
        </div >
    );
}

export default Faq;