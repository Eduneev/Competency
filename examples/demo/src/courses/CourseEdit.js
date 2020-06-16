import * as React from 'react';
import {
    AutocompleteInput,
    TextInput,
    Edit,
    ReferenceInput,
    SimpleForm,
    useTranslate,
    required,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import CourseOutcome from './CourseOutcome';

const CourseTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.courses.title', {
                reference: record.name,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const CourseEdit = props => {
    const classes = useEditStyles();
    return (
        <Edit
            title={<CourseTitle />}
            classes={classes}
            aside={<CourseOutcome />}
            {...props}
        >
            <SimpleForm>
                <TextInput validate={required()} source="name" />
                <ReferenceInput
                    source="program_id"
                    reference="programs"
                    validate={required()}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    />
                </ReferenceInput>
                <ReferenceInput
                    source="id"
                    label="Semester"
                    reference="courses"
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.semester}`}
                    />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};

export default CourseEdit;
