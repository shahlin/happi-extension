import OverallWeeklyStat from "./stats/OverallWeeklyStat";
import OverallYearlyStatCalendar from "./stats/OverallYearlyStatCalendar";
import BasicStats from "./stats/basic-stats/BasicStats";
import './PageContent.css'

function PageContent() {
    return (
        <div className="DashboardPageContent">
            <OverallWeeklyStat />
            <OverallYearlyStatCalendar />
            <BasicStats />
        </div>
    );
}

export default PageContent;