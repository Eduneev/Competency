import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
    FormWithRedirect,
    ReferenceInput,
    required,
    AutocompleteInput,
    SelectArrayInput,
    ReferenceArrayInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Aside from './Aside';

//import Basket from './Basket';


const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

//const CohortEdit = (props: any) => {
const CohortEdit = (props) => {
    const classes = useEditStyles();
    return (
        <Edit
            title="Courses"
            //aside={<Aside />}
            component="div"
            {...props}
        >
            {/* <CohortForm /> 
             title="Cohorts"
            classes={classes} */}
        
            <SimpleForm>
            <Grid container>
                <Grid item xs={6}>
                <TextInput source="name" />
                <TextInput source="institute_id" />
                <DateInput source="start_date" />
                <DateInput source="end_date" />
                {/*<TextInput source="list_courses"/>*/}
                <BooleanInput source="active" />
                </Grid>
                <Grid item xs={6}>
                <ReferenceArrayInput
                    source="list_courses"
                    reference="courses"
                    validate={required()}
                >
                    <SelectArrayInput optionText="name" />
                    {/* <AutocompleteInput
                        optionText={choice => `${choice.name}`}
                    /> */}
                </ReferenceArrayInput>  
                </Grid>
            </Grid> 
            </SimpleForm>
        </Edit>
    );
};

const CohortForm = props => {
    const classes = useEditStyles();
    return (
        <FormWithRedirect
            title="Cohorts"
            //aside={<Basket />}
            classes={classes}
            {...props}
        >
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="program" />
                <DateInput source="start_date" />
                <DateInput source="end_date" />
                <TextInput source="no._of_courses" />
                <BooleanInput source="active" />

            </SimpleForm>
        </FormWithRedirect>
    );
}; 

export default CohortEdit;
