import PageContent from './PageContent';
import Page from '../common/Page';
import './PageContent.css';

function Contact() {
    return (
        <div className='PageContent'>
            <Page pageContent={<PageContent />} />
        </div >
    );
}

export default Contact;