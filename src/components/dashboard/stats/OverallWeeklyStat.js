import { useEffect, useState } from 'react';
import { getOverallSatisfactionStats } from '../../../api/stats/OverallSatisfactionStat';
import './OverallWeeklyStat.css';

async function getWeeklySatisfactionPercentages() {
    var overallSatisfactionStat = await getOverallSatisfactionStats()

    if (Object.keys(overallSatisfactionStat).length === 0) {
        return {
            "unhappy": 0,
            "neutral": 0,
            "happy": 0,
        }
    }

    return overallSatisfactionStat.weekly
}

function OverallWeeklyStat() {
    const [unhappyPercentage, setUnhappyPercentage] = useState(0);
    const [neutralPercentage, setNeutralPercentage] = useState(0);
    const [happyPercentage, setHappyPercentage] = useState(0);

    useEffect(() => {
        const getPercentages = async () => {
            var percentages = await getWeeklySatisfactionPercentages()

            setUnhappyPercentage(percentages.unhappy)
            setNeutralPercentage(percentages.neutral)
            setHappyPercentage(percentages.happy)
        }

        getPercentages()
    }, [unhappyPercentage, neutralPercentage, happyPercentage])

    return (
        <div className='OverallWeeklyStat'>
            <p className='OverallWeeklyStatText'>You have been quite unproductive the last week :c</p>
            <div className='OverallWeeklyStatBar'>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatUnhappyBar' style={{ width: unhappyPercentage + "%", zIndex: 1 }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatNeutralBar' style={{ width: neutralPercentage + "%", zIndex: 2 }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatHappyBar' style={{ width: happyPercentage + "%", zIndex: 3 }}></div>
            </div >
        </div >
    );
}

export default OverallWeeklyStat;