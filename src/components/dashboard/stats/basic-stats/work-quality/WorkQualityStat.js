import { XAxis, BarChart, Bar, Cell, LabelList } from "recharts";
import BasicStatCard from "../BasicStatCard";
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

    useEffect(() => {
        const data = props.data;
        const stats = getWorkQualityStats(data)
        setStats(stats)
    }, [props.data])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h3>Work Quality</h3>
            </div>

            {
                (stats.length > 0) ? (
                    <div className="BasicStatChart">
                        <BarChart width={330} height={185} margin={{ top: 15 }} data={stats} >
                            <XAxis dataKey="name" fontSize={'20px'} axisLine={false} tickLine={false} />
                            <Bar barSize={50} dataKey="value" isAnimationActive={false}>
                                <LabelList fontSize={'18px'} style={{ color: 'black' }} dataKey="value" position="top" />
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

    const workQuality = data.high_quality_work_done

    if (workQuality.yes === 0 && workQuality.mostly === 0 && workQuality.somewhat === 0 && workQuality.no === 0) {
        return []
    }

    return [
        { name: 'Great', value: workQuality.yes },
        { name: 'Good', value: workQuality.mostly },
        { name: 'Average', value: workQuality.somewhat },
        { name: 'Bad', value: workQuality.no },
    ]
}

export default WorkQualityStat;