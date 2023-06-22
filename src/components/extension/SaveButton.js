import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import { callStoreAnswersAPI } from '../../utils/ApiUtils';
import {
    TOTAL_QUESTIONS_COUNT,
    LAST_SYNCED_AT_STORAGE_KEY,
    NUMBER_OF_MINUTES_TO_WAIT_BEFORE_ALLOWING_NEXT_SAVE,
    SELECTED_ANSWERS_STORAGE_KEY
} from '../../utils/Constants';
import { getKeyPromise, storeKey } from '../../utils/StorageUtils'
import { getCurrentTimestamp, minutesPassedSince } from '../../utils/TimeUtils'
import './SaveButton.css';

function SaveButton(props) {
    const [isLoading, setLoading] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {
        async function setDisabledIfRecentlySaved() {
            const lastSyncedAtTimestamp = await getKeyPromise(LAST_SYNCED_AT_STORAGE_KEY);
            if (minutesPassedSince(lastSyncedAtTimestamp) <= NUMBER_OF_MINUTES_TO_WAIT_BEFORE_ALLOWING_NEXT_SAVE) {
                setDisabled(true);
            }
        }

        setDisabledIfRecentlySaved()
    }, []);

    function performSave() {
        setLoading(true);

        callStoreAnswersAPI(props.answers).then((result) => {
            storeKey(SELECTED_ANSWERS_STORAGE_KEY, props.answers);
            storeKey(LAST_SYNCED_AT_STORAGE_KEY, getCurrentTimestamp());
            props.setSuccessStatus(true);
        }).catch((error) => {
            props.setSuccessStatus(false);
        }).finally(() => {
            props.setShowStatusAlert(true);
            setLoading(false);
            setDisabled(true);
        });
    }

    return (
        <div className='SaveLoadingButton'>
            <LoadingButton
                endIcon={<CheckIcon />}
                variant="outlined"
                onClick={performSave}
                loading={isLoading}
                disabled={(Object.keys(props.answers).length !== TOTAL_QUESTIONS_COUNT) || (isDisabled)}
            >
                Save
            </LoadingButton>
        </div>
    );
}

export default SaveButton;