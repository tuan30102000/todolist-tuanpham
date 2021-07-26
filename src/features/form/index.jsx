import React from 'react';
import PropTypes from 'prop-types';
import FormCp from './component/FormCp';
import FormHandle from './component/Formhandle';

FormFeature.propTypes = {

};

function FormFeature(props) {
    return (
        <div>
            {/* <FormCp /> */}
            <FormHandle />
        </div>
    );
}

export default FormFeature;