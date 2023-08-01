import './LeftSection.css';
import Navigation from './Navigation';

function LeftSection() {
    return (
        <div className='LeftSection'>
            <div className='LeftSectionFixedContents'>
                <img className='LeftSectionLogo' src='logo/logo.png' alt='Happi Logo' />
                <Navigation />
            </div>
        </div>
    );
}

export default LeftSection;