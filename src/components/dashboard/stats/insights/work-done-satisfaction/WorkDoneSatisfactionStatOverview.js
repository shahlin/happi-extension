import { useEffect, useState } from "react";
import InsightStatCard from "../InsightStatCard";
import { getWorkDoneSatisfactionStats } from "./Commons";

function WorkDoneSatisfactionStatOverviewCard(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getWorkDoneSatisfactionStats(data)

        setStats(stats)
    }, [props.data])

    return (
        <InsightStatCard
            style={{
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundImage: "url(" + getBackgroundImagePath() + ")",
                backgroundSize: 'cover',
            }}
            className="WorkDoneSatisfactionStatOverviewCard">
            <div className="DashboardStatHeader">
                <h1 class="InsightCardHeading">{stats.value}</h1>
            </div>
            <span class="InsightCardDescription">{stats.description}</span>
        </InsightStatCard>
    );

    function getBackgroundImagePath() {
        const prefix = "insights"
        if (!stats || !stats.value) {
            return prefix + '/default-bg.jpg'
        }

        if (stats.value == "Feeling great") return prefix + "/feeling-great-bg.jpg"
        if (stats.value == "Can do better") return prefix + "/neutral-bg.jpg"
        if (stats.value == "Unsatisfied") return prefix + "/unsatisfied-bg.jpg"
    }
}

export default WorkDoneSatisfactionStatOverviewCard;