import { ResponsiveCalendar } from '@nivo/calendar'
import './OverallYearlyStatCalendar.css';

function OverallYearlyStatCalendar() {
    return (
        <div className='OverallYearlyStatCalendar'>
            <div className='DashboardStatHeader'>
                <span>Overall Satisfaction</span>
            </div>
            <ResponsiveCalendar
                data={[
                    {
                        "value": 1,
                        "day": "2015-09-23"
                    },
                    {
                        "value": 2,
                        "day": "2015-07-31"
                    },
                    {
                        "value": 3,
                        "day": "2015-05-10"
                    },
                    {
                        "value": 2,
                        "day": "2015-12-16"
                    }
                ]}
                from="2015-12-16"
                to="2015-09-23"
                emptyColor="#D9D9D9"
                colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={3}
                dayBorderColor="#ffffff"
            />
        </div>
    );
}

export default OverallYearlyStatCalendar;