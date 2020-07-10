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
import CancelButton from './CancelButton';

const CourseOutcomeCreateToolbar = translate(({ translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton />
        <CancelButton
            variant="outlined"
            color="secondary"
            style={{ marginLeft: '1rem' }}
        />
    </Toolbar>
));

const CourseOutcomeCreate = ({ onCancel, ...props }) => {
    let course_id = -1;
    let redirect = `/courses`;
    if (!(typeof props.location.state === 'undefined')) {
        course_id = props.location.state['course_id'];
        redirect = `/courses/${course_id}`;
    }
    return (
        <Create {...props}>
            <SimpleForm
                redirect={redirect}
                toolbar={<CourseOutcomeCreateToolbar />}
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
