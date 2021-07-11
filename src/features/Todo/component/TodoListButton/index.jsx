import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
TodoListButton.propTypes = {
    ListStateShowTodo: PropTypes.array,
    handleShowStatus:PropTypes.func,
};

function TodoListButton(props) {
    const { ListStateShowTodo,handleShowStatus } = props
    return (
        <div className={'list-btn'}> 
            {ListStateShowTodo.map((item, index) => <button key={index} onClick={()=>{
                handleShowStatus(item)
            }}>{'show '+item}</button>
            )}
        </div>
    );
}

export default TodoListButton;