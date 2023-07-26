import OverallWeeklyStat from "./stats/OverallWeeklyStat";
import OverallYearlyStatCalendar from "./stats/OverallYearlyStatCalendar";
import BasicStats from "./stats/basic-stats/BasicStats";
import { getOverallSatisfactionStats } from '../../api/stats/OverallSatisfactionStat';
import { useEffect, useState } from "react";

function PageContent() {

    const [stats, setStats] = useState({})

    useEffect(() => {
        async function getStats() {
            return await getOverallSatisfactionStats()
        }

        setStats(getStats())
    }, [])

    return (
        <div className="DashboardPageContent">
            <OverallWeeklyStat data={stats} />
            <OverallYearlyStatCalendar data={stats} />
            <BasicStats />
        </div>
    );
}

export default PageContent;