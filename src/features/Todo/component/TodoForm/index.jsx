import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
TodoForm.propTypes = {
    addDatafc:PropTypes.func,

};

function TodoForm(props) {
    const {addDatafc}=props
    const saveData = function (elm) {  
        if(elm.parentElement.querySelector('input').value){
            addDatafc(elm.parentElement.querySelector('input').value)
            elm.parentElement.querySelector('input').value=''
        }
    }
    return (
        <form className='todo-form'>
            <input name='name' type='text' />
            <button onClick={(e)=>{
                e.preventDefault()
                saveData(e.target)
            }}>save</button>
        </form>
    );
}

export default TodoForm;