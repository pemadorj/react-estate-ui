import './listPage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card'
import Map from '../../components/Map/Map'

function ListPage(){
  const data = listData;
  return (
    <div className='list-page'>
      <div className="list-container">
        <div className="wrapper">
          <Filter/>
          {data.map(item=>(
            <Card key = {item.id} item = {item}/>
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items = {data}/>
      </div>
    </div>
  )
}

export default ListPage