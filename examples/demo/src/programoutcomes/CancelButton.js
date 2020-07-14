import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const CancelButton = ({ history: { goBack }, ...props }) => (
    <Button {...props} onClick={goBack}>
        Cancel
    </Button>
);

export default withRouter(CancelButton);