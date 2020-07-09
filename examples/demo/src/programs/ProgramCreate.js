import * as React from 'react';
import {
    SelectInput,
    SimpleForm,
    TextInput,
    NumberInput,
    ReferenceInput,
    AutocompleteInput,
    required,
    Create,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const ProgramCreate = props => {
    const classes = useEditStyles();
    return (
        <Create title="Program Create" classes={classes} {...props}>
            <SimpleForm>
                <TextInput validate={required()} source="name" />
                <ReferenceInput
                    label="Institute"
                    source="institute_id"
                    reference="institutes"
                    validate={required()}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    />
                </ReferenceInput>
                <TextInput source="department_name" />
                <NumberInput source="start_year" />
                <NumberInput source="intake" />
                <SelectInput
                    source="accreditation_status"
                    choices={[
                        {
                            id: 'Applying First Time',
                            name: 'Applying First Time',
                        },
                        {
                            id: 'Provisional Status for 2-3 years',
                            name: 'Provisional Status for 2-3 years',
                        },
                        {
                            id: 'Granted accreditation for 5/6 years',
                            name: 'Granted accreditation for 5/6 years',
                        },
                        { id: 'Not Accredited', name: 'Not Accredited' },
                    ]}
                    optionText="name"
                />
            </SimpleForm>
        </Create>
    );
};

export default ProgramCreate;
