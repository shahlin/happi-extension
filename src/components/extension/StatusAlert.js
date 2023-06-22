import { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function StatusAlert(props) {
    const [open, setOpen] = useState(props.show);

    useEffect(() => {
        setOpen(props.show);
    }, [props.show])

    const { vertical, horizontal } = {
        vertical: 'bottom',
        horizontal: 'center',
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <Alert onClose={handleClose} severity={props.status ? "success" : "error"} sx={{ width: '100%' }}>
                {props.status ? "Saved" : "Could not save at the moment"}
            </Alert>
        </Snackbar>
    );
}

export default StatusAlert;