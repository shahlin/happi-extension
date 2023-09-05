import { XAxis, BarChart, Bar, Cell, LabelList } from "recharts";
import BasicStatCard from "../BasicStatCard";
import { useEffect, useState } from "react";
import InsufficientDataLabel from "../InsufficientDataLabel";

var COLORS = [
    'rgba(211, 55, 78, 0.8)', // Red
    'rgba(255, 228, 134, 0.8)', // Lighter yellow
    'rgba(253, 199, 14, 0.8)', // Yellow
    'rgba(46, 175, 110, 0.8)', // Green
];

function DistractionsFrequencyStat(props) {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getDistractionsFrequencyStats(data)
        setStats(stats)
    }, [props.data])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h3>Distractions Frequency</h3>
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

function getDistractionsFrequencyStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return []
    }

    const distractionsFrequency = data.distractions_frequency

    if (distractionsFrequency.yes === 0 && distractionsFrequency.mostly === 0 && distractionsFrequency.somewhat === 0 && distractionsFrequency.no === 0) {
        return []
    }

    return [
        { name: 'Yes', value: distractionsFrequency.yes },
        { name: 'Mostly', value: distractionsFrequency.mostly },
        { name: 'Somewhat', value: distractionsFrequency.somewhat },
        { name: 'No', value: distractionsFrequency.no },
    ]
}

export default DistractionsFrequencyStat;