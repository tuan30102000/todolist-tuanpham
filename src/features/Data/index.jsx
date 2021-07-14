import { React, useEffect, useState, useRef } from 'react';
import ListData from './Components/ListData';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import PaginationBtn from './Components/PaginationBtn';
import SeachForm from './Components/SeachForm';

ShowDataFeatures.propTypes = {

};

function ShowDataFeatures(props) {
    const [data, setData] = useState([])
    const [totalRows, setTotalRows] = useState(49)
    const [PageState, setPageState] = useState({
        _limit: 10,
        _page: 1
    })
    const handlePagination = function (pageNumber) {
        const newPageState = PageState
        setPageState({
            ...newPageState,
            _page: newPageState._page + pageNumber
        })
    }
    useEffect(() => {

        try {
            async function getData() {
                /*  console.log(queryString.stringify(PageState)) */
                const queryParam = queryString.stringify(PageState)
                let DataAfter = await fetch(`http://js-post-api.herokuapp.com/api/posts?${queryParam}`)
                const rp = await DataAfter.json()
                await setTotalRows(rp.pagination._totalRows)
                await setData(rp.data)
            }
            getData()
        } catch (error) {
            console.log(error)

        }
        return () => {
        }
    }, [PageState._page])

    return (
        <div>
            <SeachForm />
            <ListData data={data} />
            <PaginationBtn totalRows={totalRows} PageState={PageState} handlePagination={handlePagination} />
        </div>
    );
}

export default ShowDataFeatures;