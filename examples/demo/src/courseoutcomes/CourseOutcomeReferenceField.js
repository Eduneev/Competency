import * as React from 'react';
import { ReferenceManyField, SingleFieldList, ChipField } from 'react-admin';

const CourseOutcomeReferenceField = props => (
    <ReferenceManyField
        label="Outcomes"
        reference="courseutcomes"
        source="course_id"
        {...props}
    >
        <SingleFieldList>
            <ChipField source="description" />
        </SingleFieldList>
    </ReferenceManyField>
);

CourseOutcomeReferenceField.defaultProps = {
    source: 'course_id',
    addLabel: true,
};

export default CourseOutcomeReferenceField;
