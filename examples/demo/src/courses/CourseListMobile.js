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

import ProgramReferenceField from '../programs/ProgramReferenceField';
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

const CourseListMobile = ({ ids, data, basePath }) => {
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
                                    {translate('resources.courses.name', 1)}
                                    :&nbsp;
                                    <TextField
                                        record={data[id]}
                                        basePath={basePath}
                                        source="name"
                                    />
                                </span>
                                <EditButton
                                    resource="courses"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <span className={classes.cardContentRow}>
                            {translate('resources.programs.name', 1)}:&nbsp;
                            <ProgramReferenceField
                                record={data[id]}
                                basePath={basePath}
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate(
                                'resources.courses.fields.code',
                                1
                            )}
                            :&nbsp;
                            <TextField
                                record={data[id]}
                                source="code"
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.courses.fields.semester')}
                            :&nbsp;
                            <NumberField
                                record={data[id]}
                                source="start_year"
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            <ReferenceManyField
                                record={data[id]}
                                basePath={basePath}
                                reference="courseoutcomes"
                                target="course_id"
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

CourseListMobile.defaultProps = {
    data: {},
    ids: [],
};

export default CourseListMobile;
