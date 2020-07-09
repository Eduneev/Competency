import * as React from 'react';
import {
    Edit,
    SelectInput,
    SimpleForm,
    useTranslate,
    TextInput,
    NumberInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const ProgramTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.programs.title', {
                reference: record.name,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const ProgramEdit = props => {
    const classes = useEditStyles();
    return (
        <Edit title={<ProgramTitle />} classes={classes} {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="department_name" />
                <NumberInput source="start_year" />
                <NumberInput source="intake" />
                <SelectInput
                    source="accreditation_status"
                    choices={[
                        {
                            id: 'Applying First Time',
                            name: 'Applying First Time',
                        },
                        {
                            id: 'Provisional Status for 2-3 years',
                            name: 'Provisional Status for 2-3 years',
                        },
                        {
                            id: 'Granted accreditation for 5/6 years',
                            name: 'Granted accreditation for 5/6 years',
                        },
                        { id: 'Not Accredited', name: 'Not Accredited' },
                    ]}
                    optionText="name"
                />
            </SimpleForm>
        </Edit>
    );
};

export default ProgramEdit;
