import './InsightStatCard.css'

function InsightStatCard(props) {
    return (
        <div className="InsightStatCard">
            {props.children}
        </div>
    );
}

export default InsightStatCard;