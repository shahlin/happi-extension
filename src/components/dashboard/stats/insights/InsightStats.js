import './InsightStats.css'
import ProductiveTimeStatDataCard from './productive-time/ProductiveTimeStatData';
import ProductiveTimeStatOverviewCard from './productive-time/ProductiveTimeStatOverview';

function InsightStats(props) {
    return (
        <>
            <div className='DashboardStatHeader'>
                <h2>Insights</h2>
            </div>

            <div className="InsightStats">
                <ProductiveTimeStatOverviewCard />
                <ProductiveTimeStatDataCard />
            </div>
        </>
    );
}

export default InsightStats;