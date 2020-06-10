import * as React from 'react';
import { ComponentType } from 'react';
import { BooleanField } from 'react-admin';
import { FieldProps } from '../types';

const colored = <T extends FieldProps>(
    WrappedComponent: ComponentType<T>
): ComponentType<T> => {
    const Colored = (props: T) =>
        props.record && props.source ? (
            props.record[props.source] ? (
                <span style={{ color: 'green' }}>
                    <WrappedComponent {...props} />
                </span>
            ) : (
                <span style={{ color: 'red' }}>
                    <WrappedComponent {...props} />
                </span>
            )
        ) : null;

    Colored.displayName = `Colored(${WrappedComponent.displayName})`;

    return Colored;
};

const ColoredBooleanField = colored<typeof BooleanField>(BooleanField);
ColoredBooleanField.defaultProps = BooleanField.defaultProps;

export default ColoredBooleanField;
