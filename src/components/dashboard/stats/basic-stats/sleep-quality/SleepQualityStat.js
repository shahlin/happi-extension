import { Pie, PieChart, Cell, Label } from "recharts";
import BasicStatCard from "../BasicStatCard";
import './SleepQualityStat.css'
import { useEffect, useState } from "react";

var COLORS = ['#D3374E', '#FDC70E', '#2EAF6E', '#D9D9D9'];

function SleepQualityStat(props) {

    const [stats, setStats] = useState([]);
    const [sleepQualityLabelText, setSleepQualityLabelText] = useState("");

    async function handleFetchingStats() {
        const data = await props.data;
        const stats = getSleepQualityStats(data)

        setStats(stats)
        setSleepQualityLabelText(getSleepQualityLabelText(data))
    }

    useEffect(() => {
        handleFetchingStats()
    }, [stats, sleepQualityLabelText])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h2>Sleep Quality</h2>
            </div>
            <div className="BasicStatChart">
                <PieChart width={350} height={200}>
                    <Pie
                        data={stats}
                        cx={180}
                        cy={95}
                        innerRadius={60}
                        outerRadius={85}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        <Label value={sleepQualityLabelText} position="center" fontSize={"40px"} />
                        {stats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </BasicStatCard>
    );
}

function getSleepQualityStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return []
    }

    const sleepQuality = data.sleep_quality

    if (sleepQuality.good === 0 && sleepQuality.average === 0 && sleepQuality.bad === 0) {
        COLORS[0] = COLORS[3]
        return [
            { name: 'Insufficient Data', value: 100 },
        ]
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