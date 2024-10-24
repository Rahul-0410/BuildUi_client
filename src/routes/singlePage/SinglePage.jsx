import React from 'react'
import './singlePage.scss';
import Slider from '../../components/slider/Slider';

function SinglePage() {
  return (
    <div className='singlePage'>
        <div className="details">
          <div className="wrapper">
            <Slider/>
            <div className="info">
              
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper"></div>
        </div>
    </div>
  )
}

export default SinglePage