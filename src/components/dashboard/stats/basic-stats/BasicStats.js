import { useEffect, useState } from 'react';
import { getBasicStats } from '../../../../api/stats/BasicStats';
import './BasicStats.css'
import SleepQualityStat from './sleep-quality/SleepQualityStat';
import WorkQualityStat from './work-quality/WorkQualityStat';
import DistractionsFrequencyStat from './distractions-frequency/DistractionsFrequencyStat';
import BreaksFrequencyStat from './breaks-frequency/BreaksFrequencyStat';
import { MenuItem, Select } from '@mui/material';

function BasicStats() {

    const [stats, setStats] = useState({})

    useEffect(() => {
        async function getStats() {
            let basicStats = await getBasicStats()
            setStats(basicStats)
        }

        getStats()
    }, [])

    return (
        <>
            <div className='DashboardStatHeader'>
                <h2>Basics</h2>
            </div>
            <div className='BasicsTimePeriodFilter'>
                <Select sx={{
                    fontFamily: 'Dongle',
                    fontSize: 18,
                    height: 30,
                    position: 'relative',
                    top: -59,
                    left: "83%"
                }} value={1} className="BasicsTimePeriodFilterSelect">
                    <MenuItem sx={{ fontFamily: 'Dongle', fontSize: 18, height: 30 }} value={1}>This Week</MenuItem>
                </Select>
            </div>

            <div className="BasicStats">
                <SleepQualityStat data={stats} />
                <WorkQualityStat data={stats} />
                <DistractionsFrequencyStat data={stats} />
                <BreaksFrequencyStat data={stats} />
            </div>
        </>

    );
}

export default BasicStats;