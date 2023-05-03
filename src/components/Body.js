import ResCard from './ResCard'
import resList from '../../utils/mockData'
import { useState } from 'react'

const Body = () => {

    const [data, setData] = useState(resList)

    function clickHandler() {
        console.log("button clicked")
        const filteredData = data.filter(x => x.data.avgRating > 4).sort((a, b) => b.data.avgRating - a.data.avgRating)
        return setData(filteredData)
    }
    return (
        <div className="body">
            <button className='filter-btn' onClick={clickHandler}>Top Rated Resturants</button>
            <div className="res-con">
                {data.map(singleResData => <ResCard key={singleResData.data.id} resData={singleResData} />)}
            </div>
        </div>

    )
}
export default Body