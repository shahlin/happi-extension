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
                colors={['#61cdbb', '#D3374E', '#FDC70E', '#2EAF6E']}
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

    return data.daily
}

function getStartOfYear() { return new Date().getFullYear() + "-01-01" }
function getEndOfYear() { return new Date().getFullYear() + "-12-31" }

export default OverallYearlyStatCalendar;