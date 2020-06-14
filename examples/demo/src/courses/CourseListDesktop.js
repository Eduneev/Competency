import * as React from 'react';
import { Fragment } from 'react';
import classnames from 'classnames';
import { BulkDeleteButton, List } from 'react-admin';
import { Route, useHistory } from 'react-router-dom';
import ProgramReferenceField from '../programs/ProgramReferenceField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Datagrid,
    NumberField,
    TextField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
} from 'react-admin';
import rowStyle from './rowStyle';
import ColoredNumberField from './ColoredNumberField';


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
    <List {...props}>
        <Datagrid rowClick="edit"
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            rowStyle={rowStyle(selectedRow, theme)}
            optimized
            {...props}>
            <TextField source="name" />
            <ProgramReferenceField />
            <TextField source="code" />
            <TextField source="semester" />
            <ReferenceManyField
                label="Outcomes"
                reference="courseoutcomes"
                target="course_id"
            >
                <SingleFieldList>
                    <ChipField source="description" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
    );
};

export default CourseListDesktop; 