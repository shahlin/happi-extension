import Division from "./division/Division";
import LeftSection from "./left-section/LeftSection";
import RightSection from "./right-section/RightSection";
import './Page.css'

function Page(props) {
    return (
        <>
            <LeftSection />
            <Division />
            <RightSection content={props.pageContent} className="PageContent" />
        </>
    );
}

export default Page;