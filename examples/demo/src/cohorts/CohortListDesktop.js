import * as React from 'react';
import { Datagrid, DateField, NumberField } from 'react-admin';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import rowStyle from './rowStyle';
import InstituteReferenceField from '../institutes/InstituteReferenceField';
import ColoredBooleanField from './ColoredBooleanField';
import ProgramReferenceField from '../programs/ProgramReferenceField';

import CohortLinkField from './CohortLinkField';

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
});

const CohortListDesktop = ({ selectedRow, ...props }) => {
    const classes = useListStyles();
    const theme = useTheme();
    return (
        <Datagrid
            rowClick="edit"
            rowStyle={rowStyle(selectedRow, theme)}
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}
        >
            <CohortLinkField />
            <InstituteReferenceField />
            <ProgramReferenceField />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <NumberField source="num_programs" />
            <ColoredBooleanField source="status" label="Active" />
        </Datagrid>
    );
};

export default CohortListDesktop;
