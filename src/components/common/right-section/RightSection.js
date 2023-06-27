import './RightSection.css';

function RightSection(props) {
    return (
        <div className='RightSection'>
            {props.content}
        </div>
    );
}

export default RightSection;