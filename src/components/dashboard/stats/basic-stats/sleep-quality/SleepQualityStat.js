import { Pie, PieChart, Cell, Label } from "recharts";
import BasicStatCard from "../BasicStatCard";
import { useEffect, useState } from "react";
import InsufficientDataLabel from "../InsufficientDataLabel";

var COLORS = ['#D3374E', '#FDC70E', '#2EAF6E', '#D9D9D9'];

function SleepQualityStat(props) {

    const [stats, setStats] = useState([]);
    const [sleepQualityLabelText, setSleepQualityLabelText] = useState("");

    useEffect(() => {
        const data = props.data;
        const stats = getSleepQualityStats(data)
        setStats(stats)
        setSleepQualityLabelText(getSleepQualityLabelText(data))
    }, [props.data])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h3>Sleep Quality</h3>
            </div>

            {
                (stats.length > 0) ? (
                    <div className="BasicStatChart">
                        <PieChart width={330} height={185}>
                            <Pie
                                data={stats}
                                cy={95}
                                innerRadius={60}
                                outerRadius={85}
                                fill="#8884d8"
                                dataKey="value"
                                style={{ outline: 'none' }}
                            >
                                <Label value={sleepQualityLabelText} position="center" fontSize={"40px"} />
                                {stats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                ) : (
                    <InsufficientDataLabel />
                )
            }
        </BasicStatCard>
    );
}

function getSleepQualityStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return []
    }

    const sleepQuality = data.sleep_quality

    if (sleepQuality.good === 0 && sleepQuality.average === 0 && sleepQuality.bad === 0) {
        return []
    }

    return [
        { name: 'Bad', value: sleepQuality.bad },
        { name: 'Average', value: sleepQuality.average },
        { name: 'Good', value: sleepQuality.good },
    ]
}

function getSleepQualityLabelText(data) {
    if (data == null || Object.keys(data).length === 0) {
        return "😶"
    }

    const sleepQuality = data.sleep_quality

    if (sleepQuality.bad > sleepQuality.average && sleepQuality.bad > sleepQuality.good) {
        // Max Bad
        return "😰"
    }

    if (sleepQuality.average > sleepQuality.bad && sleepQuality.average > sleepQuality.good) {
        // Max Average
        return "😅"
    }

    if (sleepQuality.good > sleepQuality.bad && sleepQuality.good > sleepQuality.average) {
        // Max Good
        return "🥳"
    }

    return "😶"
}

export default SleepQualityStat;