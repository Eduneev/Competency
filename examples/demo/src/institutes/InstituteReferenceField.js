import * as React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const InstituteReferenceField = props => (
    <ReferenceField
        label="Institute"
        source="institute_id"
        reference="institutes"
        {...props}
    >
        <TextField source="name" />
    </ReferenceField>
);

InstituteReferenceField.defaultProps = {
    source: 'institute_id',
    addLabel: true,
};

export default InstituteReferenceField;
