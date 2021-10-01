import React from 'react';
import './style.scss';

Loading.propTypes = {

};

function Loading(props) {
    return (
        <div className='loading'>
            <div className="loading-box">
                <i className="fad fa-spinner"></i>
            </div>
        </div>
    );
}

export default Loading;