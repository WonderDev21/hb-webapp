import React from 'react';
import { FormFeedback, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const FormInput = ({ field, form: { touched, errors }, ...props }) => {
    return (
        <>
            <Input
                invalid={!!(touched[field.name] && errors[field.name])}
                {...field}
                {...props}
            />
            {touched[field.name] && errors[field.name] && (
                <FormFeedback>{errors[field.name]}</FormFeedback>
            )}
        </>
    )
};

FormInput.propTypes = {
    meta: PropTypes.object,
    type: PropTypes.string,
    className: PropTypes.string,
};

export { FormInput };
