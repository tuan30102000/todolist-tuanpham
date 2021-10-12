import React from 'react';

FilterByService.propTypes = {

};

function FilterByService(props) {
    const { onChange, filterInfo } = props
    const serviceList = [
        { name: 'isFreeShip', content: 'Mien phi van chuyen' },
        { name: 'isPromotion', content: 'Co khuyen mai' },
    ]
    const onFilterServiceChange = function (e) {
        const { checked, name } = e.target
        // console.log(checked,name)
        onChange({[name]:checked})
    }
    return (
        <div className='filter__service' >
        <p className="filter__title">
            Dịch Vụ
        </p>
            {serviceList.map((item, index) => (
                <div key={index} className="service__group">
                    <label htmlFor={'sevice-' + item.name}>{item.content}</label>
                    <input name={item.name} onChange={onFilterServiceChange} type="checkbox" id={'sevice-' + item.name} checked={Boolean(filterInfo[item.name])} />
                </div>
            ))}

        </div>
    );
}

export default FilterByService;