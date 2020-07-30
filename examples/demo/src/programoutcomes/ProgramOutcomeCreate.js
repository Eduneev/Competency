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
import CancelButton from '../tools/CancelButton';

const ProgramOutcomeCreateToolbar = translate(({ translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton />
        <CancelButton
            variant="outlined"
            color="secondary"
            style={{ marginLeft: '1rem' }}
        />
    </Toolbar>
));

const ProgramOutcomeCreate = ({ onCancel, ...props }) => {
    let program_id = -1;
    let redirect = `/programs`;
    if (!(typeof props.location.state === 'undefined')) {
        program_id = props.location.state['program_id'];
        redirect = `/programs/${program_id}`;
    }
    return (
        <Create {...props}>
            <SimpleForm
                redirect={redirect}
                toolbar={<ProgramOutcomeCreateToolbar />}
            >
                <ReferenceInput
                    source="program_id"
                    reference="programs"
                    validate={required()}
                    defaultValue={program_id}
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

export default ProgramOutcomeCreate;
