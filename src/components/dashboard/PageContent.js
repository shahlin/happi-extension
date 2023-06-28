import OverallWeeklyStat from "./stats/OverallWeeklyStat";
import OverallYearlyStatCalendar from "./stats/OverallYearlyStatCalendar";
import './PageContent.css'

function PageContent() {
    return (
        <div className="DashboardPageContent">
            <OverallWeeklyStat />
            <OverallYearlyStatCalendar />
        </div>
    );
}

export default PageContent;