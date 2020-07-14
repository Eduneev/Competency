import * as React from 'react';
import {
    TextInput,
    Edit,
    SimpleForm,
    useTranslate,
    SaveButton,
    DeleteButton,
    Toolbar,
    required,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';

const ProgramOutcomeTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.courseoutcomes.name', {
                reference: record.description,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const ProgramOutcomeEdit = ({ ...props }) => {
    const classes = useEditStyles();

    console.log(props);
    const redirect = (basePath, id, data) => `/programs/${data.program_id}`;

    const toolbarStyles = {
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    };

    const CustomToolbar = withStyles(toolbarStyles)(props => (
        <Toolbar {...props}>
            <SaveButton />
            <DeleteButton />
        </Toolbar>
    ));

    return (
        <Edit title={<ProgramOutcomeTitle />} classes={classes} {...props}>
            <SimpleForm toolbar={<CustomToolbar />} redirect={redirect}>
                <ReferenceInput
                    source="program_id"
                    reference="programs"
                    validate={required()}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    />
                </ReferenceInput>
                <TextInput validate={required()} source="description" />
            </SimpleForm>
        </Edit>
    );
};

export default ProgramOutcomeEdit;
