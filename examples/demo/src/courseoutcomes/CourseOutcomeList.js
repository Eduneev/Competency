import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    Datagrid,
    List,
    TextField,
    CardActions,
    CreateButton,
    EditButton,
} from 'react-admin';
import { Route } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import CourseOutcomeCreate from './CourseOutcomeCreate';

const useFragmentStyle = makeStyles({
    root: {
        display: 'flex',
    },
    drawerContent: {
        width: 300,
    },
    listWithDrawer: {
        marginRight: 400,
    },
    drawerPaper: {
        zIndex: 100,
    },
    container: { minWidth: '50em', marginLeft: '1.5em' },
});

const CourseOutcomeListActions = ({ basePath }) => (
    <CardActions>
        <CreateButton basePath={basePath} />
    </CardActions>
);

class FragmentList extends React.Component {
    render() {
        const { push, classes, ...props } = this.props;
        return (
            <Fragment className={classes.container}>
                <div>
                    <Datagrid>
                        <TextField source="description" />
                    </Datagrid>
                </div>
            </Fragment>
        );
    }

    handleClose = () => {
        this.props.push('/courses/:course_id');
    };
}

const StyledFragmentList = props => {
    const classes = useFragmentStyle();
    return <FragmentList classes={classes} {...props} />;
};

const CourseOutcomeList = ({ classes, ...props }) => (
    <List
        {...props}
        sort={{ field: 'description', order: 'ASC' }}
        actions={<CourseOutcomeListActions />}
    >
        <StyledFragmentList />;
    </List>
);

export default CourseOutcomeList;