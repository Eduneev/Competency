import * as React from 'react';
import {
    AutocompleteInput,
    Datagrid,
    DateInput,
    Filter,
    List,
    ReferenceInput,
    SearchInput,
    TextField,
    TextInput,
} from 'react-admin';
import {
    makeStyles,
    useMediaQuery,
} from '@material-ui/core';

const ProgramFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput source="cohort_id" reference="cohorts">
            <AutocompleteInput
                optionText={choice =>
                    choice.department_name
                        ? `${choice.department_name}`
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
            <TextField source= "code"/>
            <TextField source= "accreditation_status"/>
            <TextField source= "name"/>
            <TextField source= "start_year"/>
            <TextField source= "outcomes"/>
        </Datagrid> 
    </List>
);

export default ProgramList;