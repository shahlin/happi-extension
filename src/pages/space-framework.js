import { useEffect } from "react";
import SpaceFramework from "../components/spaceframework/SpaceFramework";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";

export default function SpaceFrameworkPage() {
    useEffect(() => {
        document.title = PAGE_TITLE_PREFIX + "Space Framework"
    }, [])

    return (
        <SpaceFramework />
    );
}