import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const rowStyle = (selectedRow, theme) => (record, index, defaultStyle = {}) => {
    let style = defaultStyle;
    if (selectedRow === record.id) {
        style = {
            ...style,
            backgroundColor: theme.palette.action.selected,
        };
    }
    if (record.accreditation_status === 'Granted accreditation for 5/6 years')
        return {
            ...style,
            borderLeftColor: green[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    else if (record.accreditation_status === 'Not Accredited')
        return {
            ...style,
            borderLeftColor: red[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    else
        return {
            ...style,
            borderLeftColor: orange[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
};

export default rowStyle;
