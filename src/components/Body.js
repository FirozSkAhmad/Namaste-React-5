import ResCard from './ResCard'
import resList from '../../utils/mockData'

const Body = () => {
    return (
        <div className="body">
            <h2>Search</h2>
            <div className="res-con">
                {resList.map(singleResData => <ResCard key={singleResData.data.id} resData={singleResData} />)}
            </div>
        </div>

    )
}
export default Body