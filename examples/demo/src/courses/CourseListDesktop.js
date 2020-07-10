import * as React from 'react';
import { List } from 'react-admin';
import ProgramReferenceField from '../programs/ProgramReferenceField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Datagrid,
    TextField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
} from 'react-admin';
import CourseOutcomeCreate from '../courseoutcomes/CourseOutcomeCreate';

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

const CourseListDesktop = ({ selectedRow, ...props }) => {
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
            optimized
            {...props}
        >
            <TextField source="name" />
            <ProgramReferenceField />
            <TextField source="semester" />
            <ReferenceManyField
                label="Outcomes"
                reference="courseoutcomes"
                target="course_id"
                className={classes.clamp}
            >
                <SingleFieldList>
                    <ChipField source="description" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    );
};

export default CourseListDesktop;
