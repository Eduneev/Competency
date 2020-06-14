import * as React from 'react';
import { Fragment } from 'react';
import classnames from 'classnames';
import { BulkDeleteButton, List } from 'react-admin';
import { Route } from 'react-router-dom';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import CourseListMobile from './CourseListMobile';
import CourseListDesktop from './CourseListDesktop';
import CourseFilter from './CourseFilter';

const ReviewsBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteButton {...props} />
    </Fragment>
);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    listWithDrawer: {
        marginRight: 400,
    },
    drawerPaper: {
        zIndex: 100,
    },
}));

const CourseList = props => {
    const classes = useStyles();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
            <Route path="/course/:id">
                {({ match }) => {
                    const isMatch = !!(
                        match &&
                        match.params &&
                        match.params.id !== 'create'
                    );

                    return (
                        <Fragment>
                            <List
                                {...props}
                                className={classnames(classes.list)}
                                bulkActionButtons={<ReviewsBulkActionButtons />}
                                filters={<CourseFilter />}
                                perPage={15}
                                sort={{ field: 'id', order: 'ASC' }}
                            >
                                <CourseListDesktop
                                    selectedRow={
                                        isMatch && parseInt(match.params.id, 10)
                                    }
                                />
                            </List>
                        </Fragment>
                    );
                }}
            </Route>
        </div>
    );
};

export default CourseList;
