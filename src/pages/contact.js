import Contact from "../components/contact/Contact";
import { PAGE_TITLE_PREFIX } from "../utils/Constants";

export default function ContactPage() {
    document.title = PAGE_TITLE_PREFIX + "Contact"

    return (
        <Contact />
    );
}