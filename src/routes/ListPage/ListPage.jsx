import React from 'react'
import './listpage.scss';
import { listData } from '../../lib/dummyData';

function ListPage() {

  const data= listData;
  return (
    <div className='listPage'>
      <div className="listContainer">List</div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListPage;