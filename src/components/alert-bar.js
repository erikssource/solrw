import React from 'react';
import {useSelector} from 'react-redux';

import Alert from '@material-ui/lab/Alert';

const AlertBar = () => {
    const status = useSelector((state) => state.status);

    return (
        <div>
            {status.msg !== null && <Alert severity={status.type}>{status.msg}</Alert>}
        </div>
    )
}

export default AlertBar;
