import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const rowStyle = (selectedRow, theme) => (record, index, defaultStyle = {}) => {
    let style = defaultStyle;
    if (selectedRow === record.id) {
        style = {
            ...style,
            backgroundColor: theme.palette.action.selected,
        };
    }
    if (record.status)
        return {
            ...style,
            borderLeftColor: green[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    else
        return {
            ...style,
            borderLeftColor: red[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
};

export default rowStyle;
