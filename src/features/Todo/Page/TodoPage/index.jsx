import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../style.scss';
import TodoForm from '../../component/TodoForm';
import TodoList from '../../component/TodoList';
import TodoListButton from '../../component/TodoListButton';
import nextId from "react-id-generator"
import { useId } from "react-id-generator"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

TodoPage.propTypes = {

};

function TodoPage(props) {

    let TodoListData = [
    ]
    const setDataLcst = function (newTodoData) {
        localStorage.clear()
        localStorage.setItem('data', JSON.stringify(newTodoData))
    }
    const ListStateShowTodo = ['all', 'done', 'not-done']
    const [showTodoState, setshowTodoState] = useState('all')
    const [TodoData, setTodoData] = useState(TodoListData)
    const NewDataShow = TodoData.filter((item, index) => showTodoState === 'all' || showTodoState === item.status)
    useEffect(() => {
        TodoListData = !JSON.parse(localStorage.getItem('data')) ? [] : JSON.parse(localStorage.getItem('data'))
        setTodoData(TodoListData)
        return () => {
        }
    }, [])
    useEffect(() => {
        setDataLcst(TodoData)
        return
    })
    const addData = function (data) {
        if (data) {
            const newTodoData = [...TodoData]
            const newData = {
                content: data,
                status: 'not-done',
            }
            newTodoData.unshift(newData)
            setTodoData(newTodoData)
        }
    }
    const handleChangeStatusItem = function (oj) {
        const newTodoData = [...TodoData]
        // const index = newTodoData.indexOf(newTodoData.find((item) => item.id === id))
        let index = newTodoData.indexOf(oj)
        if (index >= 0) {
            newTodoData[index] = {
                ...newTodoData[index],
                status: newTodoData[index].status === 'done' ? 'not-done' : 'done'
            }
            setTodoData(newTodoData)
        }
    }
    const handleDeleteData = function (object) {
        let newTodoData = [...TodoData]
        // const index = newTodoData.indexOf(newTodoData.find((item) => item.id === id))
        let index = newTodoData.indexOf(object)
        newTodoData = [...newTodoData.slice(0, index), ...newTodoData.slice(index + 1)];
        setTodoData(newTodoData)
    }
    const handleShowStatus = (item) => {
        setshowTodoState(item)
    }
    return (
        <div className='todo-box'>
            <TodoForm addDatafc={addData} />
            <TodoList TodoData={NewDataShow} handleOnClick={handleChangeStatusItem} handleDeleteData={handleDeleteData} />
            <TodoListButton ListStateShowTodo={ListStateShowTodo} handleShowStatus={handleShowStatus} />
        </div>
    );
}

export default TodoPage;