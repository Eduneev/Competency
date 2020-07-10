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
import { Link, Route, useHistory } from 'react-router-dom';
import { useTranslate, useQueryWithStore, CreateButton } from 'react-admin';
import { CourseOutcome, FieldProps, Course } from '../types';
import { IconButton, Drawer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CourseOutcomeCreate from '../courseoutcomes/CourseOutcomeCreate';
import courseoutcomes from '../courseoutcomes';

const useStyles = makeStyles({
    root: {
        flex: 1,
    },
    container: { minWidth: '40em', marginLeft: '1.5em' },
    rightAlignedCell: { textAlign: 'right' },
    drawerPaper: {
        zIndex: 100,
    },
    drawerContent: {
        width: 300,
    },
});

const CourseOutcomes: FC<FieldProps<Course>> = ({ record }) => {
    const classes = useStyles();
    const translate = useTranslate();
    const history = useHistory();
    const handleClose = useCallback(() => {
        history.push('/courses/:id');
    }, [history]);

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
            <CreateButton
                button
                component={Link}
                to={{
                    pathname: '/courseoutcomes/create',
                    state: { course_id: record && record.id },
                }}
            />
            <List dense={true}>
                {outcomes.map((record: CourseOutcome) => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={{
                            pathname: `/courseoutcomes/${record.id}`,
                            state: { course_id: record && record.id },
                        }}
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
            <Route path="/courseoutcomes/create">
                {({ match }) => (
                    <Drawer open={!!match} anchor="right" onClose={handleClose}>
                        <CourseOutcomeCreate
                            className={classes.drawerContent}
                            onCancel={handleClose}
                            {...outcomes}
                        />
                    </Drawer>
                )}
            </Route>
        </Paper>
    );
};

export default CourseOutcomes;
