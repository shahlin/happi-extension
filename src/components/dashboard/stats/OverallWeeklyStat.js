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
    const [blankPercentage, setBlankPercentage] = useState(100);
    const [barsBorderRadius, setBarsBorderRadius] = useState({
        unhappy: { left: "inherit", right: "inherit" },
        neutral: { left: "inherit", right: "inherit" },
        happy: { left: "inherit", right: "inherit" },
        blank: { left: "inherit", right: "inherit" },
    })

    function calculateAndSetBorderRadiuses() {
        console.log("U:" + unhappyPercentage)
        console.log("N:" + neutralPercentage)
        console.log("H:" + happyPercentage)
        console.log("B:" + blankPercentage)
        barsBorderRadius.unhappy.left = "inherit"
        barsBorderRadius.unhappy.right = (neutralPercentage == 0 && happyPercentage == 0 && blankPercentage == 0) ? "inherit" : 0

        barsBorderRadius.neutral.left = (unhappyPercentage > 0) ? 0 : "inherit"
        barsBorderRadius.neutral.right = (happyPercentage > 0 || blankPercentage > 0) ? 0 : "inherit"

        barsBorderRadius.happy.left = (unhappyPercentage == 0 && neutralPercentage == 0) ? "inherit" : 0
        barsBorderRadius.happy.right = (blankPercentage > 0) ? 0 : "inherit"

        barsBorderRadius.blank.left = (blankPercentage == 100) ? "inherit" : 0
        barsBorderRadius.blank.right = (blankPercentage > 0 || blankPercentage == 100) ? "inherit" : 0

        setBarsBorderRadius(barsBorderRadius)
    }

    useEffect(() => {
        const getPercentages = async () => {
            var percentages = await getWeeklySatisfactionPercentages()

            setUnhappyPercentage(percentages.unhappy)
            setNeutralPercentage(percentages.neutral)
            setHappyPercentage(percentages.happy)
            setBlankPercentage((100 - (unhappyPercentage + neutralPercentage + happyPercentage)))
        }

        getPercentages()
        calculateAndSetBorderRadiuses()
    }, [])

    return (
        <div className='OverallWeeklyStat'>
            <p className='OverallWeeklyStatText'>You have been quite unproductive the last week :c</p>
            <div className='OverallWeeklyStatBar'>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatUnhappyBar'
                    style={{
                        width: unhappyPercentage + "%",
                        borderTopLeftRadius: barsBorderRadius.unhappy.left,
                        borderBottomLeftRadius: barsBorderRadius.unhappy.left,
                        borderTopRightRadius: barsBorderRadius.unhappy.right,
                        borderBottomRightRadius: barsBorderRadius.unhappy.right,
                    }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatNeutralBar'
                    style={{
                        width: neutralPercentage + "%",
                        borderTopLeftRadius: barsBorderRadius.neutral.left,
                        borderBottomLeftRadius: barsBorderRadius.neutral.left,
                        borderTopRightRadius: barsBorderRadius.neutral.right,
                        borderBottomRightRadius: barsBorderRadius.neutral.right,
                    }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatHappyBar'
                    style={{
                        width: happyPercentage + "%",
                        borderTopLeftRadius: barsBorderRadius.happy.left,
                        borderBottomLeftRadius: barsBorderRadius.happy.left,
                        borderTopRightRadius: barsBorderRadius.happy.right,
                        borderBottomRightRadius: barsBorderRadius.happy.right,
                    }}></div>
                <div className="OverallWeeklyStatSingleBar" id='OverallWeeklyStatEmptyBar'
                    style={{
                        width: blankPercentage + "%",
                        borderTopLeftRadius: barsBorderRadius.blank.left,
                        borderBottomLeftRadius: barsBorderRadius.blank.left,
                        borderTopRightRadius: barsBorderRadius.blank.right,
                        borderBottomRightRadius: barsBorderRadius.blank.right,
                    }}></div>
            </div >
        </div >
    );
}

export default OverallWeeklyStat;