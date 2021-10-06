import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
FilterByPriceRange.propTypes = {

};
const schema = yup.object().shape({
    salePrice_lte: yup.number(),
    salePrice_gte: yup.number(),
})

function FilterByPriceRange(props) {
    const { onChange } = props
    // const fc = () => {
    //     console.log('test')
    //     return {
    //         salePrice_lte: 0,
    //         salePrice_gte: 0,
    //     }
    // }
    const [values, setvalues] = useState({
        salePrice_lte: 0,
        salePrice_gte: 0
    })
    const form = useForm({
        defaultValues: values,
        resolver: yupResolver(schema)
    })
    // console.log(values)
    // console.log(yup.ref('salePrice_lte'))
    const submitFormFC = (data) => {
        setvalues({ ...data })
        onChange(data)
    }

    return (
        <div className="filter__price">
            <form onSubmit={form.handleSubmit(submitFormFC)}>
                <p className="price-title filter__title">
                    Khoảng giá
                </p>
                <div className="price__form-group">
                    <div className="form-group">
                        <label htmlFor="salePrice_gte">From</label>
                        <input type='text' className='price__range' id='salePrice_gte' {...form.register('salePrice_gte', { shouldUnregister: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salePrice_lte">to</label>
                        <input type='text' className='price__range' id='salePrice_lte' {...form.register('salePrice_lte', { shouldUnregister: true })} />
                    </div>
                </div>
                <button>Apply</button>
            </form>
        </div>
    );
}

export default FilterByPriceRange;
