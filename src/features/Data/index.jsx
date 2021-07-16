import queryString from 'query-string';
import { React, useEffect, useState } from 'react';
import ListData from './Components/ListData';
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
    const handleSeach = function (value) {
        const newSeachValue = PageState
        setPageState({
            ...newSeachValue,
            _page: 1,
            title_like:value
        }
        )
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
            alert('loi r')
        }
        return () => {
        }
    }, [PageState])

    return (
        <div>
            <SeachForm handleSeach={handleSeach}/>
            <ListData data={data} />
            <PaginationBtn totalRows={totalRows} PageState={PageState} handlePagination={handlePagination} />
        </div>
    );
}

export default ShowDataFeatures;