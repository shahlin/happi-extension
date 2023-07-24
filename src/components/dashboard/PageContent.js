import OverallWeeklyStat from "./stats/OverallWeeklyStat";
import OverallYearlyStatCalendar from "./stats/OverallYearlyStatCalendar";
import BasicStats from "./stats/basic-stats/BasicStats";
import { getOverallSatisfactionStats } from '../../api/stats/OverallSatisfactionStat';
import './PageContent.css'

function PageContent() {
    async function getStats() {
        return await getOverallSatisfactionStats()
    }

    return (
        <div className="DashboardPageContent">
            <OverallWeeklyStat onFetchData={getStats} />
            <OverallYearlyStatCalendar onFetchData={getStats} />
            <BasicStats />
        </div>
    );
}

export default PageContent;