import * as React from 'react';
import {
    TextInput,
    Edit,
    SimpleForm,
    useTranslate,
    SaveButton,
    DeleteButton,
    Toolbar,
    required,
    ReferenceInput,
    AutocompleteInput,
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

const CourseOutcomeEdit = ({ ...props }) => {
    const classes = useEditStyles();

    console.log(props);
    const redirect = (basePath, id, data) => `/courses/${data.course_id}`;

    const toolbarStyles = {
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    };

    const CustomToolbar = withStyles(toolbarStyles)(props => (
        <Toolbar {...props}>
            <SaveButton />
            <DeleteButton />
        </Toolbar>
    ));

    return (
        <Edit title={<CourseOutcomeTitle />} classes={classes} {...props}>
            <SimpleForm toolbar={<CustomToolbar />} redirect={redirect}>
                <ReferenceInput
                    source="course_id"
                    reference="courses"
                    validate={required()}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    />
                </ReferenceInput>
                <TextInput validate={required()} source="description" />
            </SimpleForm>
        </Edit>
    );
};

export default CourseOutcomeEdit;
