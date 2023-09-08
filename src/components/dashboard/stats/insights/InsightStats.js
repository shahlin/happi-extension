import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { getInsightStats } from '../../../../api/stats/InsightStats';
import ProductiveTimeStatDataCard from './productive-time/ProductiveTimeStatData';
import ProductiveTimeStatOverviewCard from './productive-time/ProductiveTimeStatOverview';
import WorkDoneSatisfactionStatOverviewCard from './work-done-satisfaction/WorkDoneSatisfactionStatOverview';
import WorkDoneSatisfactionStatDataCard from './work-done-satisfaction/WorkDoneSatisfactionStatData';
import './InsightStats.css'

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

                        <WorkDoneSatisfactionStatOverviewCard data={stats} />
                        <WorkDoneSatisfactionStatDataCard data={stats} />
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