import { useEffect, useState } from 'react';
import './OverallWeeklyStat.css';
import { summaryTexts } from './OverallWeeklyStatsSummary';

const PERCENTAGE_THRESHOLD_FOR_INSUFFICIENT_DATA_SUMMARY = 40

function OverallWeeklyStat(props) {
    const [unhappyPercentage, setUnhappyPercentage] = useState(0);
    const [neutralPercentage, setNeutralPercentage] = useState(0);
    const [happyPercentage, setHappyPercentage] = useState(0);

    useEffect(() => {
        const data = props.data;
        const percentages = getWeeklySatisfactionPercentages(data)

        setUnhappyPercentage(percentages.unhappy)
        setNeutralPercentage(percentages.neutral)
        setHappyPercentage(percentages.happy)
    }, [props.data])

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

function getWeeklySatisfactionPercentages(data) {
    if (data == null || Object.keys(data).length === 0) {
        return {
            "unhappy": 0,
            "neutral": 0,
            "happy": 0,
        }
    }

    return data.weekly
}

function getWeeklySatisfactionSummary(unhappyPercentage, neutralPercentage, happyPercentage) {
    if ((unhappyPercentage + neutralPercentage + happyPercentage) < PERCENTAGE_THRESHOLD_FOR_INSUFFICIENT_DATA_SUMMARY) {
        return summaryTexts.insufficient_data
    }

    if (unhappyPercentage > neutralPercentage && unhappyPercentage > happyPercentage) {
        // Max Unhappy
        return summaryTexts.unhappy
    }

    if (neutralPercentage > unhappyPercentage && neutralPercentage > happyPercentage) {
        // Max Neutral
        return summaryTexts.neutral
    }

    if (happyPercentage > unhappyPercentage && happyPercentage > neutralPercentage) {
        // Max Happy
        return summaryTexts.happy
    }

    if (unhappyPercentage === neutralPercentage && (unhappyPercentage + neutralPercentage) > happyPercentage) {
        // Equally unhappy and neutral; Less happy
        return summaryTexts.equal_data_unhappy_neutral
    }

    return summaryTexts.equal_data
}

export default OverallWeeklyStat;