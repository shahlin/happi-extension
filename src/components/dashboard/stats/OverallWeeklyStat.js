import { useEffect, useState } from 'react';
import { getOverallSatisfactionStats } from '../../../api/stats/OverallSatisfactionStat';
import './OverallWeeklyStat.css';
import OverallWeeklyStatsSummary from './OverallWeeklyStatsSummary';

const PERCENTAGE_THRESHOLD_FOR_INSUFFICIENT_DATA_SUMMARY = 40

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
            <p className='OverallWeeklyStatText'>{getWeeklySatisfactionSummary(unhappyPercentage, neutralPercentage, happyPercentage)}</p>
            <div className='OverallWeeklyStatBar'>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatUnhappyBar' style={{ width: unhappyPercentage + "%", zIndex: 1 }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatNeutralBar' style={{ width: neutralPercentage + "%", zIndex: 2 }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatHappyBar' style={{ width: happyPercentage + "%", zIndex: 3 }}></div>
            </div >
        </div >
    );
}

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

function getWeeklySatisfactionSummary(unhappyPercentage, neutralPercentage, happyPercentage) {
    if ((unhappyPercentage + neutralPercentage + happyPercentage) < PERCENTAGE_THRESHOLD_FOR_INSUFFICIENT_DATA_SUMMARY) {
        return OverallWeeklyStatsSummary.insufficient_data
    }

    if (unhappyPercentage > neutralPercentage && unhappyPercentage > happyPercentage) {
        // Max Unhappy
        return OverallWeeklyStatsSummary.unhappy
    }

    if (neutralPercentage > unhappyPercentage && neutralPercentage > happyPercentage) {
        // Max Neutral
        return OverallWeeklyStatsSummary.neutral
    }

    if (happyPercentage > unhappyPercentage && happyPercentage > neutralPercentage) {
        // Max Happy
        return OverallWeeklyStatsSummary.happy
    }

    if (unhappyPercentage == neutralPercentage && (unhappyPercentage + neutralPercentage) > happyPercentage) {
        // Equally unhappy and neutral; Less happy
        return OverallWeeklyStatsSummary.equal_data_unhappy_neutral
    }

    return OverallWeeklyStatsSummary.equal_data
}

export default OverallWeeklyStat;