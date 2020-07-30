import * as React from 'react';
import {
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
    Create,
    required,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

//import Basket from './Basket';


const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const CohortCreate = props => {
    const classes = useEditStyles();
    return (
        <Create
            //title={<ProgramTitle />}
            title="Cohorts"
            //aside={<Basket />}
            classes={classes}
            {...props}
        >
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
                <TextInput source="program" />
                <DateInput source="start_date" />
                <DateInput source="end_date" />
                <TextInput source="no._of_courses" />
                
                <BooleanInput source="active" />

            </SimpleForm>
        </Create>
    );
}; 

export default CohortCreate;
