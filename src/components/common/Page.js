import Division from "./division/Division";
import LeftSection from "./left-section/LeftSection";
import RightSection from "./right-section/RightSection";

function Page(props) {
    return (
        <>
            <LeftSection />
            <Division />
            <RightSection content={props.pageContent} />
        </>
    );
}

export default Page;