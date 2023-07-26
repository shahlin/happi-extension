import { XAxis, BarChart, Bar, Cell, LabelList } from "recharts";
import BasicStatCard from "../BasicStatCard";
import './WorkQualityStat.css'
import { useEffect, useState } from "react";
import InsufficientDataLabel from "../InsufficientDataLabel";

var COLORS = [
    'rgba(46, 175, 110, 0.8)', // Green
    'rgba(253, 199, 14, 0.8)', // Yellow
    'rgba(255, 228, 134, 0.8)', // Lighter yellow
    'rgba(211, 55, 78, 0.8)' // Red
];

function WorkQualityStat(props) {
    const [stats, setStats] = useState([]);

    async function handleFetchingStats() {
        const data = await props.data;
        const stats = getWorkQualityStats(data)

        setStats(stats)
    }

    useEffect(() => {
        handleFetchingStats()
    }, [stats])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h2>Work Quality</h2>
            </div>

            {
                (stats.length > 0) ? (
                    <div className="BasicStatChart">
                        <BarChart width={350} height={200} margin={{ top: 15 }} data={stats} >
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <Bar barSize={50} dataKey="value" isAnimationActive={false}>
                                <LabelList style={{ color: 'black' }} dataKey="value" position="top" />
                                {
                                    stats.map((entry, index) => (
                                        <Cell fill={COLORS[index % COLORS.length]} />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </div>
                ) : (
                    <InsufficientDataLabel />
                )
            }
        </BasicStatCard>
    );
}

function getWorkQualityStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return []
    }

    const workQuality = data.amount_of_work_done

    if (workQuality.yes === 0 && workQuality.mostly === 0 && workQuality.somewhat === 0 && workQuality.no) {
        return []
    }

    return [
        { name: 'Yes', value: workQuality.yes },
        { name: 'Mostly', value: workQuality.mostly },
        { name: 'Somewhat', value: workQuality.somewhat },
        { name: 'No', value: workQuality.no },
    ]
}

export default WorkQualityStat;