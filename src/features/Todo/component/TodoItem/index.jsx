import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'


TodoItem.propTypes = {
    TodoItemData: PropTypes.object,
    handleOnClick: PropTypes.func,
    index: PropTypes.number,
    handleDeleteData:PropTypes.func,
};
TodoItem.defaultProps = {
    TodoItemData: null,
    handleOnClick: null,
    index: null,
    handleDeleteData:null
};

function TodoItem(props) {
    const { TodoItemData, handleOnClick,handleDeleteData} = props

    return (
        <li className={classNames(
            {
                'todo-item': true,
                'done': TodoItemData.status === 'done',
                'not-done': TodoItemData.status === 'not-done'
            }
        )}
            
        >
            <p onClick={() => { handleOnClick(TodoItemData) }}>{TodoItemData.content}</p>
            <div className={'button'} onClick={()=>handleDeleteData(TodoItemData)}>DELETE</div>
        </li>
    );
}

export default TodoItem;