import { useEffect, useState } from "react";
import { Bar, Cell, ComposedChart, Legend, ResponsiveContainer, Scatter, XAxis, YAxis } from "recharts";
import { getWorkDoneSatisfactionStats } from "./Commons";
import InsightStatCard from "../InsightStatCard";

const data = [
    {
        overallSatisfaction: "HAPPY",
        highQualityWorkDone: 2,
        amountOfWorkDone: 3,
        date: 1,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "UNHAPPY",
        highQualityWorkDone: 4,
        amountOfWorkDone: 4,
        date: 2,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "UNHAPPY",
        highQualityWorkDone: 3,
        amountOfWorkDone: 2,
        date: 3,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "NEUTRAL",
        highQualityWorkDone: 1,
        amountOfWorkDone: 3,
        date: 4,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "HAPPY",
        highQualityWorkDone: 4,
        amountOfWorkDone: 1,
        date: 5,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "NEUTRAL",
        highQualityWorkDone: 3,
        amountOfWorkDone: 3,
        date: 6,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "UNHAPPY",
        highQualityWorkDone: 3,
        amountOfWorkDone: 1,
        date: 7,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "NEUTRAL",
        highQualityWorkDone: 3,
        amountOfWorkDone: 1,
        date: 8,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "UNHAPPY",
        highQualityWorkDone: 4,
        amountOfWorkDone: 2,
        date: 9,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "HAPPY",
        highQualityWorkDone: 2,
        amountOfWorkDone: 1,
        date: 10,
        overallSatisfactionShowAtIndex: 5,
    },
    {
        overallSatisfaction: "UNHAPPY",
        highQualityWorkDone: 3,
        amountOfWorkDone: 1,
        date: 11,
        overallSatisfactionShowAtIndex: 5,
    }
];

function WorkDoneSatisfactionStatDataCard(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getWorkDoneSatisfactionStats(data)

        setStats(stats)
    }, [props.data])

    const legendTextFormatting = (value, entry) => {
        return <span style={{ color: "#757575", fontWeight: "lighter" }}>{value}</span>;
    };

    return (
        <InsightStatCard style={{
            paddingTop: 20,
            paddingLeft: 0,
            paddingRight: 5,
            paddingBottom: 0,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            boxShadow: "none",
            border: "1px solid #F8F8F8"
        }} className="WorkDoneSatisfactionStatCard">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                    <XAxis dataKey="date" tickLine={false} />
                    <YAxis domain={[0, 5]} tickCount="6" tickFormatter={formatYAxis} tickLine={false} />
                    <Bar name="Amount of Work Done" dataKey="amountOfWorkDone" fill="#D9D9D9" />
                    <Bar name="Quality of Work Done" dataKey="highQualityWorkDone" fill="#EE9153" />
                    <Legend align="right" formatter={legendTextFormatting} />
                    <Scatter data={data} dataKey="overallSatisfactionShowAtIndex" legendType="none" value="4">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getScatterPointColor(entry)} />
                        ))}
                    </Scatter>
                </ComposedChart>
            </ResponsiveContainer>
        </InsightStatCard >
    );

    function formatYAxis(value) {
        if (value === 0) return "None"
        if (value === 1) return "Bad"
        if (value === 2) return "Average"
        if (value === 3) return "Good"
        if (value === 4) return "Great"
        if (value === 5) return ""
    }

    function getScatterPointColor(entry) {
        const overallSatisfaction = entry.overallSatisfaction

        if (overallSatisfaction === "HAPPY") return 'rgba(46, 175, 110, 0.6)'
        if (overallSatisfaction === "NEUTRAL") return 'rgba(253, 199, 14, 0.6)'
        if (overallSatisfaction === "UNHAPPY") return 'rgba(211, 55, 78, 0.6)'
    }

}

export default WorkDoneSatisfactionStatDataCard;