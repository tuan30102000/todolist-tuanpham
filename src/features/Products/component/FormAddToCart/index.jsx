import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import QuanityFiled from '../QuanityFiled';
import * as yup from "yup";
FormAddToCart.propTypes = {

};
const schema = yup.object().shape({
    quantity: yup.number().positive('Số lượng sản phẩm phải là số nguyên dương').integer('Số lượng sản phẩm phải là số nguyên dương')
})
function FormAddToCart({ onSubmit }) {
    const form = useForm({
        defaultValues: {
            quantity: 1
        },
        resolver: yupResolver(schema)
    })
    const { handleSubmit, } = form


    const handleSubmitForm = (data) => {
        onSubmit(data)
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <p className="form-title">
                Số lượng
            </p>
            <QuanityFiled form={form} nameFiled='quantity' />
            <button className='form__submit'>Add to cart</button>
        </form>
    );
}

export default FormAddToCart;