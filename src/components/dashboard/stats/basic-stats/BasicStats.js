import { useEffect, useState } from 'react';
import { getBasicStats } from '../../../../api/stats/BasicStats';
import './BasicStats.css'
import SleepQualityStat from './sleep-quality/SleepQualityStat';
import WorkQualityStat from './work-quality/WorkQualityStat';

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
        <div className="BasicStats">
            <SleepQualityStat data={stats} />
            <WorkQualityStat data={stats} />
        </div>
    );
}

export default BasicStats;