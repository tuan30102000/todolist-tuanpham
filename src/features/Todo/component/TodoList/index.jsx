import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './style.scss'

TodoList.propTypes = {
    TodoData: PropTypes.array,
    handleOnClick:PropTypes.func,
    handleDeleteData:PropTypes.func,
};
TodoList.defaultProps = {
    TodoData: [],
    handleOnClick:null,
    handleDeleteData:null
}


function TodoList(props) {
    const { TodoData,handleOnClick,handleDeleteData } = props
    return (
        <div>
            <ul>
                {
                    TodoData.map((item,index) => <TodoItem TodoItemData={item} index={index} handleDeleteData={handleDeleteData} handleOnClick={handleOnClick} key={index}/>)
                }

            </ul>

        </div>
    );
}

export default TodoList;