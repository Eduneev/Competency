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
                source="cohort_id"
                label="Cohort"
                reference="cohorts"
                allowEmpty
            >
                <AutocompleteInput source="name" optionText="name" />
            </ReferenceInput>
            <ReferenceInput
                source="id"
                label="Accreditation Status"
                reference="programs"
                allowEmpty
            >
                <AutocompleteInput
                    source="accreditation_status"
                    optionText=""
                />
            </ReferenceInput>
            <DateInput source="date_gte" />
            <DateInput source="date_lte" />
        </Filter>
    );
};

export default CohortFilter;
