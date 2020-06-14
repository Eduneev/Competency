import * as React from 'react';
import {
    DateInput,
    Filter,
    SearchInput,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';

const CourseFilter = props => {
    return (
        <Filter {...props}>
            <SearchInput source="q" alwaysOn />
            <ReferenceInput
                source="program_id"
                label="Program"
                reference="programs"
                allowEmpty
            >
                <AutocompleteInput source="name" optionText="name" />
            </ReferenceInput>
            <ReferenceInput
                source="id"
                label="Semester"
                reference="courses"
                allowEmpty
            >
                <AutocompleteInput source="semester" optionText="" />
            </ReferenceInput>
            <DateInput source="date_gte" />
            <DateInput source="date_lte" />
        </Filter>
    );
};

export default CourseFilter;
