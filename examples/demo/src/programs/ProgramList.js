import * as React from 'react';
import { Fragment } from 'react';
import {
    AutocompleteInput,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceInput,
    SearchInput,
    TextField,
    TextInput,
} from 'react-admin';
import {
    makeStyles,
    useMediaQuery,
    Divider,
    Tabs,
    Tab,
} from '@material-ui/core';

//import NbItemsField from './NbItemsField';
//import CustomerReferenceField from '../visitors/CustomerReferenceField';
//import MobileGrid from './MobileGrid'; 

const ProgramFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput source="cohort_id" reference="name">
            <AutocompleteInput
                optionText={choice =>
                    choice.first_name && choice.last_name
                        ? `${choice.first_name} ${choice.last_name}`
                        : ''
                }
            />
        </ReferenceInput>
        <DateInput source="start_year" />
    </Filter>
);

const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});

// const ProgramList = (props) => (
//     <List {...props} >
//         <Datagrid>
//             <TextField source= "cohort_id"/>
//             <TextField source= "department_name"/>
//         </Datagrid> 
//     </List>
// );

const ProgramList = ({ classes, ...props }) => (
    <List
        {...props}
        sort={{ field: 'start_year', order: 'DESC' }} 
        perPage={25}
        filters={<ProgramFilter />}
    >
        <Datagrid {...props}> 
            <TextField source= "cohort_id"/>
            <TextField source= "department_name"/>
        </Datagrid> 
    </List>
);

export default ProgramList;