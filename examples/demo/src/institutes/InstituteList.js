import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { ShowButton, TextField, useTranslate, List } from 'react-admin';

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
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
}));

const Grid = ({ ids, data, basePath }) => {
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
                                    {translate('resources.institutes.name', 1)}
                                    :&nbsp;
                                    <TextField
                                        record={data[id]}
                                        source="name"
                                    />
                                </span>
                                <ShowButton
                                    resource="institutes"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <span className={classes.cardContentRow}>
                            {translate('resources.institutes.fields.address')}
                            :&nbsp;
                            <TextField record={data[id]} source="address" />
                            ,&nbsp;
                            <TextField record={data[id]} source="zipcode" />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.institutes.fields.mission')}
                            :&nbsp;
                            <TextField
                                record={data[id]}
                                source="mission"
                                className={classes.clamp}
                            />
                        </span>
                        <span className={classes.cardContentRow}>
                            {translate('resources.institutes.fields.vision')}
                            :&nbsp;
                            <TextField
                                record={data[id]}
                                source="vision"
                                className={classes.clamp}
                            />
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

Grid.defaultProps = {
    data: {},
    ids: [],
};

const InstituteList = ({ classes, ...props }) => (
    <List {...props} perPage={1}>
        <Grid />
    </List>
);

export default InstituteList;
