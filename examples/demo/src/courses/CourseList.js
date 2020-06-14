import * as React from 'react';
import { Fragment } from 'react';
import classnames from 'classnames';
import { BulkDeleteButton, List } from 'react-admin';
import { Route, useHistory } from 'react-router-dom';
import ProgramReferenceField from '../programs/ProgramReferenceField';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import CourseListMobile from './CourseListMobile';
import CourseListDesktop from './CourseListDesktop';
import CourseFilter from './CourseFilter';

const ReviewsBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteButton {...props} />
    </Fragment>
);

const useStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'white',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    headerCell: {
        padding: '6px 8px 6px 8px',
    },
    rowCell: {
        padding: '6px 8px 6px 8px',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
});

const CourseList = props => {
    const classes = useStyles();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    /*
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/cohorts');
    }, [history]);
    */

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
                                perPage={25}
                                // sort={{ field: 'start_year', order: 'DESC' }}
                            >
                                {isXSmall ? (
                                    <CourseListMobile />
                                ) : (
                                    <CourseListDesktop
                                        selectedRow={
                                            isMatch &&
                                            parseInt(match.params.id, 10)
                                        }
                                    />
                                )}
                            </List>
                        </Fragment>
                    );
                }}
            </Route>
        </div>
    );
};

export default CourseList; 

