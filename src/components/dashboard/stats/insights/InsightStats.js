import { useEffect, useState } from 'react';
import { getInsightStats } from '../../../../api/stats/InsightStats';
import './InsightStats.css'
import ProductiveTimeStatDataCard from './productive-time/ProductiveTimeStatData';
import ProductiveTimeStatOverviewCard from './productive-time/ProductiveTimeStatOverview';
import { Alert } from '@mui/material';

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
            {Object.keys(stats).length > 0 &&
                <>
                    <div className='DashboardStatHeader'>
                        <h2>Insights</h2>
                    </div>

                    <div className="InsightStats">
                        <ProductiveTimeStatOverviewCard data={stats} />
                        <ProductiveTimeStatDataCard data={stats} />
                    </div>
                </>
            }

            {Object.keys(stats).length === 0 &&
                <Alert severity="info">
                    You will start seeing <strong>insights</strong> here once you've recorded enough data 😊
                </Alert>
            }
        </>
    );
}

export default InsightStats;