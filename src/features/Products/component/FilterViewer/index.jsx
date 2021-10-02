import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import FilterLabel from '../FilterLabel';
import { boolean } from 'yup/lib/locale';
FilterView.propTypes = {

};
const filterList = [
    {
        id: 1,
        getLabel: () => 'giao hang mien phi',
        isActive: (filter) => Boolean(filter.isFreeShip),
        isVisiable: () => true,
        isRemoveable: (filter) => false,
        onDelete: () => { },
        onToggle: (filter) => {
            const newFilter = {
                ...filter,
            }
            if (newFilter.isFreeShip)  newFilter.isFreeShip=undefined
            else newFilter.isFreeShip=true
            return newFilter
        },
    },
    {
        id: 2,
        getLabel: (filter) => 'co khuyen mai',
        isActive: () => true,
        isVisiable: (filter) => /* Object.keys(filter).includes('isPromotion') */Boolean(filter.isPromotion),
        isRemoveable: (filter) => true,
        onDelete: (filter) => {
            const newFilter = {
                ...filter,
            }
            if (newFilter.isPromotion)  newFilter.isPromotion=undefined
            else newFilter.isPromotion=true
            return newFilter
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getLabel: (filter) => `${filter.salePrice_gte}-${filter.salePrice_lte}`,
        isActive: () => true,
        isVisiable: (filter) => Object.keys(filter).includes('salePrice_lte') && Object.keys(filter).includes('salePrice_gte'),
        isRemoveable: () => true,
        onDelete: (filter) => {
            const newFilter = { ...filter }
            delete newFilter.salePrice_lte
            delete newFilter.salePrice_gte

            return newFilter
        },
        onToggle: () => { },
    },
    {
        id: 4,
        getLabel: (filter) => `${filter['category.name']}`,
        isActive: () => true,
        isVisiable: (filter) => Object.keys(filter).includes('category.id'),
        isRemoveable: () => true,
        onDelete: (filter) => {

            const newFilter = { ...filter }
            delete newFilter['category.id']
            delete newFilter['category.name']

            return newFilter
        },
        onToggle: () => { },
    },

]
function FilterView({ filterInfo, onChange }) {

    const memoFilter = useMemo(() => {
        return filterList.filter((item) => item.isVisiable(filterInfo))
    }, [filterInfo])
    return (
        <div className='filter__view'>
            {memoFilter.map((item) =>
                <FilterLabel
                    content={item.getLabel(filterInfo)}
                    key={item.id}
                    isActive={item.isActive(filterInfo)}
                    isRemove={item.isRemoveable(filterInfo)}
                    isVisiable={item.isVisiable(filterInfo)}
                    onRemove={item.isRemoveable(filterInfo) ? () => { onChange(item.onDelete(filterInfo)) } : null}
                    onToggle={item.isRemoveable(filterInfo) ? null : () => { onChange(item.onToggle(filterInfo)) }}
                />)}
        </div>
    );
}

export default FilterView;