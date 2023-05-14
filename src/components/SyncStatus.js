import { useState, useEffect } from 'react';
import { getKeyPromise } from '../utils/StorageUtils'
import { getDateObjectFromTimestamp, dateIsToday, getTimeFromDateObjectIn12HourFormat } from '../utils/TimeUtils'
import { LAST_SYNCED_AT_STORAGE_KEY } from '../utils/Constants'
import './SyncStatus.css';

async function getSyncStatusText() {
    const lastSyncedAt = await getKeyPromise(LAST_SYNCED_AT_STORAGE_KEY);
    const lastSyncedAtDateObject = getDateObjectFromTimestamp(lastSyncedAt);

    if (dateIsToday(lastSyncedAtDateObject)) {
        return "Last synced at " + getTimeFromDateObjectIn12HourFormat(lastSyncedAtDateObject);
    }

    return "Not yet synced today";
}

function SyncStatus() {
    const [syncStatusText, setSyncStatusText] = useState();

    useEffect(() => {
        getSyncStatusText().then(result => setSyncStatusText(result));
    }, []);

    return (
        <span className="SyncStatusText">
            {syncStatusText}
        </span>
    );
}

export default SyncStatus;