// in src/comments.js
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CohortLinkField from './CohortLinkField';
import {
    DateField,
    EditButton,
    NumberField,
    TextField,
    useTranslate,
} from 'react-admin';

import InstituteReferenceField from '../institutes/InstituteReferenceField';
import ColoredBooleanField from './ColoredBooleanField';

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
}));

const CohortListMobile = ({ ids, data, basePath }) => {
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
                                    {translate('resources.cohorts.name', 1)}
                                    :&nbsp;
                                    <CohortLinkField
                                        record={data[id]}
                                        basePath={basePath}
                                    />
                                </span>
                                <EditButton
                                    resource="cohorts"
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
                            {translate('resources.cohorts.fields.start_date')}
                            :&nbsp;
                            <DateField record={data[id]} source="start_date" />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.cohorts.fields.end_date')}
                            :&nbsp;
                            <DateField record={data[id]} source="end_date" />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.cohorts.fields.num_programs')}
                            :&nbsp;
                            <NumberField
                                record={data[id]}
                                source="num_programs"
                                className={classes.total}
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.commands.fields.status')}
                            :&nbsp;
                            <TextField source="status" record={data[id]} />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.cohorts.fields.active')}
                            :&nbsp;
                            <ColoredBooleanField
                                record={data[id]}
                                source="status"
                            />
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

CohortListMobile.defaultProps = {
    data: {},
    ids: [],
};

export default CohortListMobile;
