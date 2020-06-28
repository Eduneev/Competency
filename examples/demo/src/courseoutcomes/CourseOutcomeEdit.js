import * as React from 'react';
import {
    TextInput,
    Edit,
    SimpleForm,
    useTranslate,
    SaveButton,
    DeleteButton,
    Toolbar,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';

const CourseOutcomeTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.courseoutcomes.name', {
                reference: record.description,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const CourseOutcomeEdit = props => {
    const classes = useEditStyles();
    console.log(props);

    const toolbarStyles = {
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    };

    const CustomToolbar = withStyles(toolbarStyles)(props => (
        <Toolbar {...props}>
            <SaveButton redirect={'/courses/:course_id'} />
            <DeleteButton />
        </Toolbar>
    ));

    return (
        <Edit title={<CourseOutcomeTitle />} classes={classes} {...props}>
            <SimpleForm toolbar={<CustomToolbar />}>
                <TextInput source="description" />
            </SimpleForm>
        </Edit>
    );
};

export default CourseOutcomeEdit;
