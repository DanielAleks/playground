import React, { useState } from 'react'
import './carousel.sass'

function Carousel() {
  const [isImage, setIsImage] = useState<any>('')

  const imges = [1, 2, 3, 4, 5]
  // imges.map((item, index) => {
  // <li>{item}</li>
  // console.log(item)



  const handleLeftClick = (todoObj) => {
    imges.map((item) => {
      return (
        <li>{item}</li>
      )
    }
    )
  }

  const handleRightClick = () => {
    return <li>clicked</li>
  }




  return (
    <div className='container'>
      <h1>Carousel</h1>
      <div className='outerborder'>
        <div onClick={handleLeftClick} className='leftslide'>
          <p>Left</p>
        </div>
        <div onClick={handleRightClick} className='rightslide'>
          <p>Right</p>
        </div>
        <div>
          <h1>

            {/* {imges} */}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Carousel
