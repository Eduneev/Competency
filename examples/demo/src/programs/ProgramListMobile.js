// in src/comments.js
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import {
    EditButton,
    NumberField,
    TextField,
    useTranslate,
    ReferenceManyField,
    ChipField,
    SingleFieldList,
} from 'react-admin';

import InstituteReferenceField from '../institutes/InstituteReferenceField';
import ColoredNumberField from './ColoredNumberField';

const useListStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
    },
    cardTitleContent: {
        display: 'flex',
        flexDirection: 'rows',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContent: theme.typography.body1,
    cardContentRow: {
        display: 'flex',
        flexDirection: 'rows',
        alignItems: 'center',
        margin: '0.5rem 0',
    },
    accreditation: {
        fontWeight: 'bold',
    },
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
}));

const ProgramListMobile = ({ ids, data, basePath }) => {
    const translate = useTranslate();
    const classes = useListStyles();
    return (
        <div style={{ margin: '1.5em' }}>
            {ids.map(id => (
                <Card key={id} className={classes.card}>
                    <CardHeader
                        title={
                            <div className={classes.cardTitleContent}>
                                <span>
                                    {translate('resources.programs.name', 1)}
                                    :&nbsp;
                                    <TextField
                                        record={data[id]}
                                        basePath={basePath}
                                        source="name"
                                    />
                                </span>
                                <EditButton
                                    resource="programs"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <span className={classes.cardContentRow}>
                            {translate('resources.institutes.name', 1)}:&nbsp;
                            <InstituteReferenceField
                                record={data[id]}
                                basePath={basePath}
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate(
                                'resources.programs.fields.department_name',
                                1
                            )}
                            :&nbsp;
                            <TextField
                                record={data[id]}
                                source="department_name"
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.programs.fields.start_year')}
                            :&nbsp;
                            <NumberField
                                record={data[id]}
                                source="start_year"
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.programs.fields.intake')}
                            :&nbsp;
                            <ColoredNumberField
                                record={data[id]}
                                source="intake"
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate(
                                'resources.programs.fields.accreditation_status'
                            )}
                            :&nbsp;
                            <TextField
                                record={data[id]}
                                source="accreditation_status"
                                className={classes.accreditation}
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            <ReferenceManyField
                                record={data[id]}
                                basePath={basePath}
                                reference="programoutcomes"
                                target="program_id"
                                className={classes.clamp}
                            >
                                <SingleFieldList>
                                    <ChipField source="description" />
                                </SingleFieldList>
                            </ReferenceManyField>
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

ProgramListMobile.defaultProps = {
    data: {},
    ids: [],
};

export default ProgramListMobile;
