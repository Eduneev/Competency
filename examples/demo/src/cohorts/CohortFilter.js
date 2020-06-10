import * as React from 'react';
import {
    DateInput,
    Filter,
    SearchInput,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';

const CohortFilter = props => {
    return (
        <Filter {...props}>
            <SearchInput source="q" alwaysOn />
            <ReferenceInput
                source="id"
                label="Name"
                reference="cohorts"
                allowEmpty
            >
                <AutocompleteInput source="name" optionText="name" />
            </ReferenceInput>
            <DateInput source="date_gte" />
            <DateInput source="date_lte" />
        </Filter>
    );
};

export default CohortFilter;
