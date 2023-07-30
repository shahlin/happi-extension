import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";
import { registerUserIfNotExists } from "../api/auth/ClientRegistration";

export default function DashboardPage() {
    useEffect(() => {
        document.title = PAGE_TITLE_PREFIX + "Dashboard"
    }, [])

    const [userExists, setUserExists] = useState(false)

    useEffect(() => {
        async function registerUserIfNotExistsPreLoad() {
            try {
                await registerUserIfNotExists();
                setUserExists(true)
            } catch (error) {
                setUserExists(false)
            }
        }

        registerUserIfNotExistsPreLoad()
    }, []);

    return userExists ? (
        <Dashboard />
    ) : (<span>Loading...</span>);
}