import * as React from 'react';
import { Fragment } from 'react';
import classnames from 'classnames';
import { BulkDeleteButton, List } from 'react-admin';
import { Route, useHistory } from 'react-router-dom';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import ProgramListMobile from './ProgramListMobile';
import ProgramListDesktop from './ProgramListDesktop';
import ProgramFilter from './ProgramFilter';
//import ReviewEdit from './ReviewEdit';

const ProgramsBulkActionButtons = props => (
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

const CohortList = props => {
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
            <Route path="/program/:id">
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
                                bulkActionButtons={
                                    <ProgramsBulkActionButtons />
                                }
                                filters={<ProgramFilter />}
                                perPage={15}
                                sort={{ field: 'start_year', order: 'DESC' }}
                            >
                                {isXSmall ? (
                                    <ProgramListMobile />
                                ) : (
                                    <ProgramListDesktop
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

export default CohortList;
