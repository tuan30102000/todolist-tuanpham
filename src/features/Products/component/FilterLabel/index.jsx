import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classnames from 'classnames'
FilterLabel.propTypes = {

};

function FilterLabel({ content, isRemove, onRemove, onToggle,isActive }) {
    return (
        <div className={classnames({
            'filter__label': true,
            'not-active':! isActive,
            'can-click':!isRemove
        })}
            onClick={onToggle} >
            <p>{content}</p>
            {!!isRemove && <div onClick={onRemove} ><i className="fal fa-times-circle"></i></div>}
        </div>
    );
}

export default FilterLabel;