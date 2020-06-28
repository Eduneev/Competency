import React from 'react';
import {
    SaveButton,
    Create,
    SimpleForm,
    required,
    Toolbar,
    translate,
    TextInput,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';
import Button from '@material-ui/core/Button';

const CourseOutcomeCreateToolbar = translate(
    ({ onCancel, translate, ...props }) => (
        <Toolbar {...props}>
            <SaveButton />
            <Button redirect={onCancel}>{translate('ra.action.cancel')}</Button>
        </Toolbar>
    )
);

const CourseOutcomeCreate = ({ onCancel, ...props }) => {
    if (props.location.state === 'undefined') return null;

    const course_id = props.location.state['course_id'];
    const redirect = `/courses/${course_id}`;
    return (
        <Create {...props}>
            <SimpleForm
                redirect={redirect}
                toolbar={<CourseOutcomeCreateToolbar onCancel={redirect} />}
            >
                <ReferenceInput
                    source="course_id"
                    reference="courses"
                    validate={required()}
                    defaultValue={course_id}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    />
                </ReferenceInput>
                <TextInput source="description" validate={required()} />
            </SimpleForm>
        </Create>
    );
};

export default CourseOutcomeCreate;
