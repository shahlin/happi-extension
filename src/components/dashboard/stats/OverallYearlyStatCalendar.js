import { ResponsiveCalendar } from '@nivo/calendar'
import './OverallYearlyStatCalendar.css';
import { useEffect, useState } from 'react';
import { getDatesBetween, getEndDateOfYear, getStartDateOfYear, getYearMonthDayFormattedDate } from '../../../utils/TimeUtils';

// Workaround
const UNHAPPY_DATAPOINTS_COUNT = 1000
const NEUTRAL_DATAPOINTS_COUNT = 2000
const HAPPY_DATAPOINTS_COUNT = 3000
const FUTURE_DATE_DATAPOINTS_COUNT = 4000

function OverallYearlyStatCalendar(props) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const data = props.data;
        const remappedSatisfactionData = getRemappedDailySatisfactionData(data)

        setDailyData(remappedSatisfactionData)
    }, [props.data])

    return (
        <div className='OverallYearlyStatCalendar'>
            <div className='DashboardStatHeader'>
                <h2>Overall Satisfaction</h2>
            </div>
            <ResponsiveCalendar
                data={dailyData}
                from={getStartDateOfYear()}
                to={getEndDateOfYear()}
                tooltip={({ day, value, color }) => (
                    (value < FUTURE_DATE_DATAPOINTS_COUNT) &&
                    <div style={{
                        backgroundColor: 'rgba(100, 100, 100, 0.8)',
                        padding: '6px 10px',
                        fontSize: '16px',
                        borderRadius: '7px',
                        color: 'white'
                    }}>
                        {day}
                    </div>
                )}
                emptyColor="#D9D9D9"
                colors={['#D3374E', '#FDC70E', '#61CDBB', '#F1F1F1']}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={3}
                dayBorderColor="#ffffff"
            />
        </div >
    );
}

function getRemappedDailySatisfactionData(data) {
    if (data == null || data.length === 0 || Object.keys(data).length === 0) {
        return []
    }

    var unhappyCount = UNHAPPY_DATAPOINTS_COUNT
    var neutralCount = NEUTRAL_DATAPOINTS_COUNT
    var happyCount = HAPPY_DATAPOINTS_COUNT
    data.daily.forEach(function (obj) {
        obj.day = obj.date;
        delete obj.date;

        if (obj.value === "UNHAPPY") { obj.value = unhappyCount += 1 }
        if (obj.value === "NEUTRAL") { obj.value = neutralCount += 1 }
        if (obj.value === "HAPPY") { obj.value = happyCount += 1 }
    });

    const todaysDate = new Date()
    const endOfYearDate = new Date(getEndDateOfYear());
    const upcomingDates = getDatesBetween(todaysDate, endOfYearDate)

    var futureDateCount = FUTURE_DATE_DATAPOINTS_COUNT
    upcomingDates.forEach(function (upcomingDate) {
        data.daily.push({
            day: getYearMonthDayFormattedDate(upcomingDate),
            value: futureDateCount += 1
        })
    })

    return data.daily
}

export default OverallYearlyStatCalendar;