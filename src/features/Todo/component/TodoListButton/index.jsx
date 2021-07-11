import React from 'react';
import PropTypes from 'prop-types';

TodoListButton.propTypes = {
    ListStateShowTodo: PropTypes.array,
    handleShowStatus:PropTypes.func,
};

function TodoListButton(props) {
    const { ListStateShowTodo,handleShowStatus } = props
    return (
        <div>
            {ListStateShowTodo.map((item, index) => <button key={index} onClick={()=>{
                handleShowStatus(item)
            }}>{'show '+item}</button>
            )}
        </div>
    );
}

export default TodoListButton;