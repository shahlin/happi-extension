import { useEffect, useState } from "react";
import { getProductiveTimeStats } from "./Commons";
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import InsightStatCard from "../InsightStatCard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontFamily: "Dongle",
        backgroundColor: "#EDEDED",
        fontSize: 20,
        fontWeight: 800,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 25
    },
    [`&.${tableCellClasses.body}`]: {
        fontFamily: "Dongle",
        color: "#757575",
        fontSize: 20,
        border: 0,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 25
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    '&:nth-of-type(even)': {
        backgroundColor: "#F9F9F9",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function ProductiveTimeStatDataCard(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        const data = props.data;
        const stats = getProductiveTimeStats(data)

        setStats(stats)
    }, [props.data])

    return (
        <InsightStatCard style={{
            padding: 0,
            overflow: "hidden",
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
        }} className="ProductiveTimeStatDataCard">
            <TableContainer>
                <Table size="small" aria-label="Productive time of the day table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Time of the Day</StyledTableCell>
                            <StyledTableCell align="center">Days</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {getRows().map((row) => (
                            <StyledTableRow
                                key={row.timeOfDay}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell sx={{ textTransform: "lowercase", "&::first-letter": { textTransform: "uppercase" } }} component="th" scope="row">
                                    {row.timeOfDay}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.days}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </InsightStatCard >
    );

    function createData(timeOfDay, days) {
        return { timeOfDay, days };
    }

    function getRows() {
        let defaultRows = [
            createData("NONE", 0),
            createData("MORNING", 0),
            createData("AFTERNOON", 0),
            createData("EVENING", 0),
            createData("NIGHT", 0),
            createData("EQUAL", 0),
        ]

        if (stats && Object.keys(stats).length === 0) {
            return defaultRows;
        }

        let rows = [];
        defaultRows.map(row => {
            row.days = stats.data[row.timeOfDay] ?? 0

            rows.push(createData(row.timeOfDay, row.days))
        });

        return rows
    }

}

export default ProductiveTimeStatDataCard;