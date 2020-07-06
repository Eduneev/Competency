import * as React from 'react';
import {
    AutocompleteInput,
    BooleanInput,
    DateInput,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    useTranslate,
    required,
    TextInput,
    NumberField,
    TextField,
    ColoredNumberField,
    InstituteReferenceField,
    NumberInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

//import Basket from './Basket';

const ProgramTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.commands.title', {
                reference: record.reference,
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
        <Edit
            //title={<ProgramTitle />}
            title="Programs"
            //aside={<Basket />}
            classes={classes}
            {...props}
        >
            <SimpleForm>
                <TextInput source="name" />
                {//<InstituteReferenceField />
}
                <TextInput source="department_name" />
                <NumberInput source="start_year" />
                {//<ColoredNumberField source="intake" />
}
                <NumberInput source="intake" />
                {//<TextField source="accreditation_status" />
}
                {/* <ReferenceInput source="institute" reference="customers">
                    <AutocompleteInput
                        optionText={choice =>
                            `${choice.first_name} ${choice.last_name}`
                        }
                    />
                </ReferenceInput>
                <ReferenceInput
                    source="department name"
                    reference="customers"
                    validate={required()}
                >
                    <AutocompleteInput
                        optionText={choice => `${choice.email}`}
                    />
                </ReferenceInput> */}

                <SelectInput
                    source="accreditation status"
                    choices={[
                        { id: 'notaccredited', name: 'Not Accredited' },
                        { id: 'accredited', name: 'Accredited' },
                        { id: 'firsttime', name: 'Applying First Time' },
                        {
                            id: 'unknown',
                            name: 'unknown',
                            disabled: true,
                        },
                    ]}
                />
                {//<BooleanInput source="returned" />
}
            </SimpleForm>
        </Edit>
    );
}; 

export default ProgramEdit;
