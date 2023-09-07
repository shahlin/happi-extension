import { useEffect, useState } from 'react';
import { getInsightStats } from '../../../../api/stats/InsightStats';
import './InsightStats.css'
import ProductiveTimeStatDataCard from './productive-time/ProductiveTimeStatData';
import ProductiveTimeStatOverviewCard from './productive-time/ProductiveTimeStatOverview';

function InsightStats() {

    const [stats, setStats] = useState({})

    useEffect(() => {
        async function getStats() {
            let insightStats = await getInsightStats()
            setStats(insightStats)
        }

        getStats()
    }, [])

    return (
        <>
            <div className='DashboardStatHeader'>
                <h2>Insights</h2>
            </div>

            <div className="InsightStats">
                <ProductiveTimeStatOverviewCard data={stats} />
                <ProductiveTimeStatDataCard data={stats} />
            </div>
        </>
    );
}

export default InsightStats;