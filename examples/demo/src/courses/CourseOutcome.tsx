import React, { useState, useEffect, useCallback, FC } from 'react';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslate, useQueryWithStore } from 'react-admin';
import { CourseOutcome, FieldProps, Course } from '../types';
import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        flex: 1,
    },
    container: { minWidth: '40em', marginLeft: '1.5em' },
    rightAlignedCell: { textAlign: 'right' },
});

const CourseOutcomes: FC<FieldProps<Course>> = ({ record }) => {
    const classes = useStyles();
    const translate = useTranslate();

    /*

    const fetchCourseOutcomes = useCallback(async () => {
        const { data: courseoutcomes } = await dataProvider.getMany(
            'courseoutcomes',
            {
                course_id: course_id
            }
        );
        const outcomes = courseoutcomes;
        setState(state => ({
            ...state,
            outcomes: outcomes,
        }));
    }, [course_id, dataProvider]);

    useEffect(() => {
        fetchCourseOutcomes();
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps

    */

    const { loaded, error, data: outcomes } = useQueryWithStore({
        type: 'getList',
        resource: 'courseoutcomes',
        payload: {
            filter: { course_id: record && record.id },
            sort: { field: 'id', order: 'ASC' },
            pagination: { page: 1, perPage: 100 },
        },
    });

    console.log(outcomes);

    if (!loaded || error || !outcomes) return null;

    return (
        <Paper className={classes.container}>
            <CardHeader title={translate('resources.courseoutcomes.name')} />

            <List dense={true}>
                {outcomes.map((record: CourseOutcome) => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/courseoutcome/${record.id}`}
                    >
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary={record.description} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default CourseOutcomes;
