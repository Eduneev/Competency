import * as React from 'react';
import { ReferenceManyField, SingleFieldList, ChipField } from 'react-admin';

const ProgramOutcomeReferenceField = props => (
    <ReferenceManyField
        label="Outcomes"
        reference="programoutcomes"
        source="program_id"
        {...props}
    >
        <SingleFieldList>
            <ChipField source="description" />
        </SingleFieldList>
    </ReferenceManyField>
);

ProgramOutcomeReferenceField.defaultProps = {
    source: 'program_id',
    addLabel: true,
};

export default ProgramOutcomeReferenceField;
