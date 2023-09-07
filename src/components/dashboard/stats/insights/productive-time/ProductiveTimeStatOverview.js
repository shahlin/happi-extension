import { useEffect, useState } from "react";
import InsightStatCard from "../InsightStatCard";
import { getProductiveTimeStats } from "./Commons";

function ProductiveTimeStatOverviewCard(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getProductiveTimeStats(data)

        setStats(stats)
    }, [props.data])

    return (
        <InsightStatCard style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }} className="ProductiveTimeInsightStatCard">
            <div className="DashboardStatHeader">
                <h1 class="InsightCardHeading">{stats.value}</h1>
            </div>
            <span class="InsightCardDescription">{stats.description}</span>
        </InsightStatCard>
    );
}

export default ProductiveTimeStatOverviewCard;