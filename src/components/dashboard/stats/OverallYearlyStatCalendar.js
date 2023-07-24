import { ResponsiveCalendar } from '@nivo/calendar'
import './OverallYearlyStatCalendar.css';
import { useEffect, useState } from 'react';

function OverallYearlyStatCalendar(props) {

    const [dailyData, setDailyData] = useState([])

    async function handleFetchingStats() {
        const data = await props.onFetchData();

        setDailyData(getRemappedDailySatisfactionData(data))
    }

    useEffect(() => {
        handleFetchingStats()
    }, [dailyData])

    return (
        <div className='OverallYearlyStatCalendar'>
            <div className='DashboardStatHeader'>
                <h2>Overall Satisfaction</h2>
            </div>
            <ResponsiveCalendar
                data={dailyData}
                from={getStartOfYear()}
                to={getEndOfYear()}
                tooltip={({ day, value, color }) => (
                    <div style={{
                        backgroundColor: 'rgba(100, 100, 100, 0.8)',
                        padding: '6px 10px',
                        fontSize: '16px',
                        borderRadius: '7px',
                        color: 'white'
                    }}>
                        {day}
                    </div>
                )
                }
                emptyColor="#D9D9D9"
                colors={['#61CDBB', '#D3374E', '#FDC70E', '#F1F1F1']}
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
    if (data == null || data.length == 0 || Object.keys(data).length === 0) {
        return []
    }

    data.daily.forEach(function (obj) {
        obj.day = obj.date;
        delete obj.date;

        if (obj.value == "UNHAPPY") { obj.value = 1 }
        if (obj.value == "NEUTRAL") { obj.value = 2 }
        if (obj.value == "HAPPY") { obj.value = 3 }
    });

    const todaysDate = new Date()
    const endOfYearDate = new Date(getEndOfYear());
    const upcomingDates = getDatesBetween(todaysDate, endOfYearDate)

    upcomingDates.forEach(function (upcomingDate) {
        data.daily.push({
            day: getFormattedDate(upcomingDate),
            value: 4
        })
    })

    return data.daily
}

function getStartOfYear() { return new Date().getFullYear() + "-01-01" }
function getEndOfYear() { return new Date().getFullYear() + "-12-31" }

function getDatesBetween(startDate, endDate) {
    const currentDate = new Date(startDate.getTime());
    const dates = [];
    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}

function getFormattedDate(date) {
    const year = date.toLocaleString('default', { year: 'numeric' });
    const month = date.toLocaleString('default', { month: '2-digit' });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
}

export default OverallYearlyStatCalendar;

/*
TODO:

1. Upcoming dates shouldn't have tooltips
2. Remove magic numbers and add constants for the values
3. Fix green not showing (only 3 colors taken)
*/