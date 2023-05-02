import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import { callStoreAnswersAPI } from '../utils/ApiUtils';
import { TOTAL_QUESTIONS_COUNT } from '../utils/Constants';
import './SaveButton.css';

function SaveButton(props) {
    const [isLoading, setLoading] = useState(false);

    function performSave() {
        setLoading(true);

        try {
            callStoreAnswersAPI(props.answers);
        } catch (e) {
            alert("Something went wrong");
        }

        setLoading(false);
    }

    return (
        <div className='SaveLoadingButton'>
            <LoadingButton
                endIcon={<CheckIcon />}
                variant="outlined"
                onClick={performSave}
                loading={isLoading}
                disabled={Object.keys(props.answers).length !== TOTAL_QUESTIONS_COUNT}
            >
                Save
            </LoadingButton>
        </div>
    );
}

export default SaveButton;