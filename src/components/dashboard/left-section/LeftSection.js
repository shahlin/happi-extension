import './LeftSection.css';
import Navigation from './Navigation';

function LeftSection() {
    return (
        <div className='LeftSection'>
            <img className='LeftSectionLogo' src='logo/logo.png' />
            <Navigation />
        </div>
    );
}

export default LeftSection;