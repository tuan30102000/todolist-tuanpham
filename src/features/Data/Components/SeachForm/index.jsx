import { React, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


SeachForm.propTypes = {
    handleSeach: PropTypes.func,


};
SeachForm.defaultProps = {
    handleSeach: null

}

function SeachForm(props) {
    let timeOutRef = useRef(null)
    const { handleSeach } = props
    const [valueForm, setvalueForm] = useState('')
    const getSeachValue = (value) => {
        if (timeOutRef.current) clearTimeout(timeOutRef.current)
        setvalueForm(value)
        timeOutRef.current = setTimeout(
            () => {  
                if (handleSeach) handleSeach(value)
            }, 300
        )
    }


    return (
        <div>
            <input
                type='text'
                onChange={(e) => getSeachValue(e.target.value)}
                value={valueForm}
            />
        </div>
    );
}

export default SeachForm;