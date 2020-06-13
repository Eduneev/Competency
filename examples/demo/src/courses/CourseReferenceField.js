import * as React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const CourseReferenceField = props => (
    <ReferenceField
        label="Course"
        source="course_id"
        reference="courses"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

CourseReferenceField.defaultProps = {
    source: 'course_id',
    addLabel: true,
};

export default CourseReferenceField;
