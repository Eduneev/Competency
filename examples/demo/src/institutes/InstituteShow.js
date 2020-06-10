import * as React from 'react';
import { Fragment } from 'react';
import {
    //TabbedShowLayout,
    Tab,
    //RichTextField,
    TextField,
    //useTranslate,
    Filter,
    SearchInput,
    Show,
    EmailField,
    Datagrid,
} from 'react-admin';

import {
    makeStyles,
    useMediaQuery,
    Divider,
    Tabs,
    //Tab,
} from '@material-ui/core';

const InstituteFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const InstituteTitle = ({ record }) => <span>{record.name}</span>;

/*
export const PostShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField label="Id" source="id" />
                <TextField source="title" />
                <TextField source="teaser" />
            </Tab>
            <Tab label="body" path="body">
                <RichTextField source="body" addLabel={false} />
            </Tab>
            <Tab label="Miscellaneous" path="miscellaneous">
                <TextField
                    label="Password (if protected post)"
                    source="password"
                    type="password"
                />
                <DateField label="Publication date" source="published_at" />
                <NumberField source="average_note" />
                <BooleanField
                    label="Allow comments?"
                    source="commentable"
                    defaultValue
                />
                <TextField label="Nb views" source="views" />
            </Tab>
            <Tab label="comments" path="comments">
                <ReferenceManyField
                    reference="comments"
                    target="post_id"
                    addLabel={false}
                >
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
*/
const useDatagridStyles = makeStyles({
    total: { fontWeight: 'bold' },
});

class TabbedDatagrid extends React.Component {
    tabs = [{ id: 'info', name: 'info' }, { id: 'contact', name: 'contact' }];

    state = { info: [], contact: [] };

    static getDerivedStateFromProps(props, state) {
        if (props.ids !== state[props.filterValues.status]) {
            return { ...state, [props.filterValues.status]: props.ids };
        }
        return null;
    }

    handleChange = (event, value) => {
        const { filterValues, setFilters } = this.props;
        setFilters({ ...filterValues, status: value });
    };

    render() {
        const { isXSmall, classes, filterValues, ...props } = this.props;

        return (
            <Fragment>
                <Tabs
                    variant="fullWidth"
                    centered
                    value={filterValues.status}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                >
                    {this.tabs.map(choice => (
                        <Tab
                            key={choice.id}
                            label={choice.name}
                            value={choice.id}
                        />
                    ))}
                </Tabs>
                <Divider />
                <div>
                    {filterValues.status === 'info' && (
                        <Datagrid
                            {...props}
                            ids={this.state.info}
                            optimized
                            rowClick="edit"
                        >
                            <TextField source="name" />
                            <TextField source="address" />
                            <TextField source="zipcode" />
                            <TextField source="vision" />
                            <TextField source="mission" />
                        </Datagrid>
                    )}
                    {filterValues.status === 'contact' && (
                        <Datagrid
                            {...props}
                            ids={this.state.contact}
                            rowClick="edit"
                        >
                            <TextField source="contact.first_name" />
                            <TextField source="contact.last_name" />
                            <TextField source="contact.designation" />
                            <EmailField source="contact.email" />
                            <TextField source="contact.mobile" />
                        </Datagrid>
                    )}
                </div>
            </Fragment>
        );
    }
}

const StyledTabbedShowLayout = props => {
    const classes = useDatagridStyles();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    return <TabbedDatagrid classes={classes} isXSmall={isXSmall} {...props} />;
};

const InstituteShow = ({ classes, ...props }) => (
    <Show
        {...props}
        title={<InstituteTitle />}
        filterDefaultValues={{ status: 'info' }}
        filters={<InstituteFilter />}
    >
        <StyledTabbedShowLayout />
    </Show>
);

export default InstituteShow;
