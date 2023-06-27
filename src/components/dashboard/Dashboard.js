import './Dashboard.css';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';
import Division from './division/Division';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <LeftSection />
            <Division />
            <RightSection />
        </div>
    );
}

export default Dashboard;