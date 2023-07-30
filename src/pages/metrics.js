import { useEffect } from "react";
import Metrics from "../components/metrics/Metrics";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";

export default function MetricsPage() {
    useEffect(() => {
        document.title = PAGE_TITLE_PREFIX + "Metrics"
    }, [])

    return (
        <Metrics />
    );
}