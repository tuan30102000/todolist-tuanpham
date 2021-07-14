import { React, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


SeachForm.propTypes = {

};

function SeachForm(props) {
    const timeOutRef = useRef(null)
    const getSeachValue = (value) => {

        let h1 = setTimeout(
            () => {
                console.log(h1)
            }, 2000
        )
    }


    return (
        <div>
            <input
                type='text'
                onChange={(e) => getSeachValue(e.target.value)}
            />
        </div>
    );
}

export default SeachForm;