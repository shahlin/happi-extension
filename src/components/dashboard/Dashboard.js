import './Dashboard.css';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default Dashboard;