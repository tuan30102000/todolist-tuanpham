import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import QuanityFiled from '../QuanityFiled';
FormAddToCart.propTypes = {

};
function FormAddToCart(props) {
    const [values, setvalues] = useState(1)
    const form = useForm({
        defaultValues: {
            quantity: 1
        }
    })
    const {handleSubmit,}=form
   
    const handleChange = (value) => {
        console.log(value)
        if ((!isNaN(Number(value)) && value)) {
            setvalues(parseInt(Number(value) ? value : 0))
            console.log(1)
        }
        else {
            setvalues(...[0])
            console.log(2)
        }

    }
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <QuanityFiled form={form} nameFiled='quantity'/>
            <button className=''>Add to cart</button>
        </form>
    );
}

export default FormAddToCart;