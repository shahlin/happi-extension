import { useEffect, useState } from "react";
import { Bar, Cell, ComposedChart, Legend, ResponsiveContainer, Scatter, XAxis, YAxis } from "recharts";
import { getWorkDoneSatisfactionStats } from "./Commons";
import InsightStatCard from "../InsightStatCard";

const MAX_Y_AXIS_INDEX = 5

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

    const formattedData = getFormattedData()

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
                <ComposedChart data={formattedData}>
                    <XAxis dataKey="date" tickLine={false} />
                    <YAxis domain={[0, MAX_Y_AXIS_INDEX]} tickCount="6" tickFormatter={formatYAxis} tickLine={false} />
                    <Bar name="Amount of Work Done" dataKey="amountOfWorkDone" fill="#D9D9D9" />
                    <Bar name="Quality of Work Done" dataKey="highQualityWorkDone" fill="#EE9153" />
                    <Legend align="right" formatter={legendTextFormatting} />
                    <Scatter data={formattedData} dataKey="overallSatisfactionShowAtIndex" legendType="none" value="4">
                        {formattedData.map((entry, index) => (
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
        if (value === MAX_Y_AXIS_INDEX) return ""
    }

    function getScatterPointColor(entry) {
        const overallSatisfaction = entry.overallSatisfaction

        if (overallSatisfaction === "HAPPY") return 'rgba(46, 175, 110, 0.6)'
        if (overallSatisfaction === "NEUTRAL") return 'rgba(253, 199, 14, 0.6)'
        if (overallSatisfaction === "UNHAPPY") return 'rgba(211, 55, 78, 0.6)'
    }

    function getFormattedData() {
        let rows = [];

        if (!stats || stats.length === 0) {
            return rows;
        }

        stats.data.forEach(element => {
            let formattedRow = mapStatToChartDataFormat(element)
            rows.push(
                createData(
                    formattedRow.overallSatisfaction,
                    formattedRow.amountOfWorkDone,
                    formattedRow.highQualityWorkDone,
                    formattedRow.date
                )
            )
        });

        return rows
    }

    function mapStatToChartDataFormat(stat) {
        var amountOfWorkDone = 0
        var highQualityWorkDone = 0
        if (stat.amount_of_work_done === "YES") amountOfWorkDone = 4
        if (stat.amount_of_work_done === "MOSTLY") amountOfWorkDone = 3
        if (stat.amount_of_work_done === "SOMEWHAT") amountOfWorkDone = 2
        if (stat.amount_of_work_done === "NO") amountOfWorkDone = 1

        if (stat.high_quality_work_done === "YES") highQualityWorkDone = 4
        if (stat.high_quality_work_done === "MOSTLY") highQualityWorkDone = 3
        if (stat.high_quality_work_done === "SOMEWHAT") highQualityWorkDone = 2
        if (stat.high_quality_work_done === "NO") highQualityWorkDone = 1

        return {
            overallSatisfaction: stat.overall_satisfaction,
            amountOfWorkDone: amountOfWorkDone,
            highQualityWorkDone: highQualityWorkDone,
            date: (new Date(stat.date)).getDate(),
        }
    }

    function createData(overallSatisfaction, amountOfWorkDone, highQualityWorkDone, date) {
        return {
            overallSatisfaction: overallSatisfaction,
            highQualityWorkDone: highQualityWorkDone,
            amountOfWorkDone: amountOfWorkDone,
            date: date,
            overallSatisfactionShowAtIndex: MAX_Y_AXIS_INDEX,
        }
    }

}

export default WorkDoneSatisfactionStatDataCard;