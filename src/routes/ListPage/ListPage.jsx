import React from 'react'
import './listpage.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';

function ListPage() {

  const data= listData;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
           <Filter/>

           {
            data.map(item=>(
              <Card key={item.id} item={item}/>
            ))
           }
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListPage;