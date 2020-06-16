import React from 'react';
import {
    SaveButton,
    Create,
    SimpleForm,
    required,
    Toolbar,
    translate,
    TextInput,
} from 'react-admin';
import Button from '@material-ui/core/Button';

const CourseOutcomeCreateToolbar = translate(
    ({ onCancel, translate, ...props }) => (
        <Toolbar {...props}>
            <SaveButton />
            <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
        </Toolbar>
    )
);

const CourseOutcomeCreate = ({ onCancel, ...props }) => {
    return (
        <Create {...props}>
            <SimpleForm
                toolbar={<CourseOutcomeCreateToolbar onCancel={onCancel} />}
            >
                <TextInput source="description" validate={required()} />
            </SimpleForm>
        </Create>
    );
};

export default CourseOutcomeCreate;
