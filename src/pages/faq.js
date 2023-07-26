import Faq from "../components/faq/Faq";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";

export default function FaqPage() {
    document.title = PAGE_TITLE_PREFIX + "Frequently Asked Questions"

    return (
        <Faq />
    );
}