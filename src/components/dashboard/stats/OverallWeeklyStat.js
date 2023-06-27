import './OverallWeeklyStat.css';

function OverallWeeklyStat() {
    return (
        <div className='OverallWeeklyStat'>
            <p className='OverallWeeklyStatText'>You have been quite unproductive the last week :c</p>
            <div className='OverallWeeklyStatBar'>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatUnhappyBar' style={{ width: "50%" }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatNeutralBar' style={{ width: "30%" }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatHappyBar' style={{ width: "20%" }}></div>
            </div >
        </div >
    );
}

export default OverallWeeklyStat;