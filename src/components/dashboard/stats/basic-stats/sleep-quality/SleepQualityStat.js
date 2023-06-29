import { Pie, PieChart, Cell } from "recharts";
import BasicStatCard from "../BasicStatCard";
import './SleepQualityStat.css'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

const COLORS = ['#D3374E', '#FDC70E', '#2EAF6E'];

function SleepQualityStat() {
    return (
        <BasicStatCard>
            <div className='DashboardStatHeader'>
                <h2>Sleep Quality</h2>
            </div>
            <div className="BasicStatChart">
                <PieChart width={350} height={200}>
                    <Pie
                        data={data}
                        cx={180}
                        cy={95}
                        innerRadius={60}
                        outerRadius={85}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </BasicStatCard>
    );
}

export default SleepQualityStat;