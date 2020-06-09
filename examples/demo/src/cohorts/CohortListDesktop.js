import * as React from 'react';
import { Datagrid, DateField, NumberField } from 'react-admin';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import InstituteReferenceField from '../institutes/InstituteReferenceField';
import ColoredBooleanField from './ColoredBooleanField';

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
    return (
        <Datagrid
            rowClick="edit"
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}
        >
            <CohortLinkField />
            <InstituteReferenceField link={false} />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <NumberField source="num_programs" />
            <ColoredBooleanField source="end_date" label="Active" />
        </Datagrid>
    );
};

export default CohortListDesktop;
