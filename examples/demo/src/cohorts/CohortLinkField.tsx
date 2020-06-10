import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-admin';
import { FieldProps, Cohort } from '../types';

const CohortLinkField: FC<FieldProps<Cohort>> = props =>
    props.record ? (
        <Link to={`/cohorts/${props.record.id}`}>{props.record.name}</Link>
    ) : null;

CohortLinkField.defaultProps = {
    source: 'id',
    label: 'Name',
};

export default CohortLinkField;
