import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import './SaveButton.css';

function SaveButton() {
    const [isLoading, setLoading] = useState(false);

    function performSave() {
        setLoading(true)
    }

    return (
        <div className='SaveLoadingButton'>
            <LoadingButton
                endIcon={<CheckIcon />}
                variant="outlined"
                onClick={performSave}
                loading={isLoading}
            >
                Save
            </LoadingButton>
        </div>
    );
}

export default SaveButton;