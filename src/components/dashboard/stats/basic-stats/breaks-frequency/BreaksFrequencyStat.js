import { Pie, PieChart, Cell } from "recharts";
import BasicStatCard from "../BasicStatCard";
import { useEffect, useState } from "react";
import InsufficientDataLabel from "../InsufficientDataLabel";

var COLORS = [
    'rgb(46, 175, 110)', // Green
    'rgb(253, 199, 14)', // Yellow
    'rgba(255, 228, 134, 0.8)', // Lighter yellow
    'rgb(211, 55, 78)' // Red
];

function BreaksFrequencyStat(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getBreaksFrequencyStats(data)
        setStats(stats)
    }, [props.data])

    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h3>Breaks Frequency</h3>
            </div>

            {
                (stats.length > 0) ? (
                    <div className="BasicStatChart">
                        <PieChart width={330} height={195}>
                            <Pie
                                data={stats}
                                cy={95}
                                fill="#8884d8"
                                dataKey="value"
                                style={{ outline: 'none' }}
                                label
                            >
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

function getBreaksFrequencyStats(data) {
    if (data == null || Object.keys(data).length === 0) {
        return []
    }

    const breaksFrequency = data.breaks_frequency

    if (breaksFrequency.yes === 0 && breaksFrequency.mostly === 0 && breaksFrequency.somewhat === 0 && breaksFrequency.no === 0) {
        return []
    }

    var stats = [
        { name: 'Yes', value: breaksFrequency.yes },
        { name: 'Mostly', value: breaksFrequency.mostly },
        { name: 'Somewhat', value: breaksFrequency.somewhat },
        { name: 'No', value: breaksFrequency.no },
    ]

    var colorsToRemove = []
    stats = stats.filter((stat, index) => {
        if (stat.value === 0) {
            colorsToRemove.push(index)
            return false
        }

        return true;
    })

    COLORS = COLORS.filter((color, index) => {
        if (colorsToRemove.includes(index)) {
            return false;
        }

        return true
    })

    return stats
}

export default BreaksFrequencyStat;