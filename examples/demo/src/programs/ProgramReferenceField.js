import * as React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const ProgramReferenceField = props => (
    <ReferenceField
        label="Program"
        source="program_id"
        reference="programs"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

ProgramReferenceField.defaultProps = {
    source: 'program_id',
    addLabel: true,
};

export default ProgramReferenceField;
