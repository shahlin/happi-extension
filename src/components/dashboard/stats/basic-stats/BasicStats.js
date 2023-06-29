import './BasicStats.css'
import SleepQualityStat from './sleep-quality/SleepQualityStat';

function BasicStats() {
    return (
        <div className="BasicStats">
            <SleepQualityStat />
            <SleepQualityStat />
        </div>
    );
}

export default BasicStats;