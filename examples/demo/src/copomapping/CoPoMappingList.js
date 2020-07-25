import React, { useState, Component } from 'react';
import {
    ReferenceInput,
    SelectInput,
    TextField,
    Datagrid,
    List,
    Filter,
    SimpleForm,
    AutocompleteInput,
    required,
    useQueryWithStore,
} from 'react-admin';
import { createStore, combineReducers, compose } from 'redux';
// import {reducer as form} from 'redux-form';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ProgramReferenceField from '../programs/ProgramReferenceField';

class CoPoMappingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption1: {},
            selectedOption2: {},
        };
    }

    handleChange1 = selectedOption1 => {
        this.setState({ selectedOption1 });
    };

    handleChange2 = selectedOption1 => {
        this.setState({ selectedOption2: selectedOption1 });
    };

    render() {
        // const options1 = [{value: 'program_id', label: 'Program'}];

        // const options2 = [];

        // const { loaded, error, data } = useQueryWithStore({
        //     type: 'getList',
        //     resource: 'programs',
        //     payload: {
        //         filter: { program_id: record && record.id },
        //         sort: { field: 'id', order: 'ASC' },
        //         pagination: { page: 1, perPage: 100 },
        //     },
        // });

        //const filteredOptions = options2.filter((o) => o.link === this.state.selectedOption1.value)

        return (
            <SimpleForm>
                <ReferenceInput
                    source="program_id"
                    reference="programs"
                    value={this.state.program_id}
                    onChange={this.handleChange1}
                    validate={required()}
                >
                    <SelectInput optionText={choice => `${choice.name}`} />
                </ReferenceInput>
                <ReferenceInput
                    source="course_id"
                    reference="courses"
                    value={this.state.selectedOption2.value}
                    onChange={this.handleChange2}
                    filter={{
                        course_id: this.state.selectedOption1.program_id,
                    }}
                    validate={required()}
                >
                    <SelectInput optionText={choice => `${choice.name}`} />
                </ReferenceInput>
            </SimpleForm>
        );
    }
}

export default CoPoMappingList;
