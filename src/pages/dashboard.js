import Dashboard from "../components/dashboard/Dashboard";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";

export default function DashboardPage() {
    document.title = PAGE_TITLE_PREFIX + "Dashboard"

    return (
        <Dashboard />
    );
}