import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/SearchBar/SearchBar'

function HomePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
          <div className="wrapper">

          <h1 className='title'>Find Real & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor inventore 
            necessitatibus maiores, ipsa labore ut at sapiente? Magni illum, pariatur nesciunt enim ad iste cupiditate quibusdam reiciendis, quia 
            facere deserunt incidunt earum alias aperiam totam quos maxime. Dolores blanditiis ipsa placeat rerum mollitia nisi corrupti. Quasi quibusdam nisi aspernatur?
          </p>
          <SearchBar/>

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage