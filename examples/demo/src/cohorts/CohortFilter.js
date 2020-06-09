import * as React from 'react';
import {
    DateInput,
    Filter,
    SearchInput,
    ReferenceField,
    SelectInput,
} from 'react-admin';

const CohortFilter = props => {
    return (
        <Filter {...props}>
            <SearchInput source="q" alwaysOn />
            <ReferenceField source="cohort_id" reference="cohorts" allowEmpty>
                <SelectInput source="name" />
            </ReferenceField>
            <DateInput source="date_gte" />
            <DateInput source="date_lte" />
        </Filter>
    );
};

export default CohortFilter;
