import './BasicStats.css'
import SleepQualityStat from './sleep-quality/SleepQualityStat';
import WorkQualityStat from './work-quality/WorkQualityStat';

function BasicStats() {
    return (
        <div className="BasicStats">
            <SleepQualityStat />
            <WorkQualityStat />
        </div>
    );
}

export default BasicStats;