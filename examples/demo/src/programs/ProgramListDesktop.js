import * as React from 'react';
import {
    Datagrid,
    NumberField,
    TextField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
} from 'react-admin';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InstituteReferenceField from '../institutes/InstituteReferenceField';
import ColoredNumberField from './ColoredNumberField';
import rowStyle from './rowStyle';
//import ProgramOutcomeReferenceField from '../programoutcomes/ProgramOutcomeReferenceField';

const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'white',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    headerCell: {
        padding: '6px 8px 6px 8px',
    },
    rowCell: {
        padding: '6px 8px 6px 8px',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
});

const ProgramListDesktop = ({ selectedRow, ...props }) => {
    const classes = useListStyles();
    const theme = useTheme();
    return (
        <Datagrid
            rowClick="edit"
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            rowStyle={rowStyle(selectedRow, theme)}
            optimized
            {...props}
        >
            <TextField source="name" />
            <InstituteReferenceField />
            <TextField source="department_name" />
            <NumberField source="start_year" />
            <ColoredNumberField source="intake" />
            <TextField source="accreditation_status" />
            <ReferenceManyField
                label="Outcomes"
                reference="programoutcomes"
                target="program_id"
                className={classes.clamp}
            >
                <SingleFieldList>
                    <ChipField source="description" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    );
};

export default ProgramListDesktop;
