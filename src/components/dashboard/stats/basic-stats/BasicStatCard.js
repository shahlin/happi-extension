import './BasicStatCard.css'

function BasicStatCard(props) {
    return (
        <div className="BasicStatCard">
            {props.children}
        </div>
    );
}

export default BasicStatCard;