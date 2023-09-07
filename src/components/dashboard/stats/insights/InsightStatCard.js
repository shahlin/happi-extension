import './InsightStatCard.css'

function InsightStatCard(props) {
    return (
        <div style={props.style} className="InsightStatCard">
            {props.children}
        </div>
    );
}

export default InsightStatCard;