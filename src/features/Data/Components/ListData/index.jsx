import React from 'react';
import PropTypes from 'prop-types';
//<ListData totalRows={totalRows} PageState={PageState} data={data}  handlePagination={handlePagination}/>
ListData.propTypes = {
    data: PropTypes.array,

};
ListData.defaultProps = {
    data: [{
        title: 'dassdasd',
        id: 1
    }],
   

}

function ListData(props) {
    const { data } = props
    return (
        <div>
            <ul>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default ListData;