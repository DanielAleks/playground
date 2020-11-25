import React, { useState } from 'react'
import './carousel.sass'
import archOcean from '../assets/archOcean.jpg'
import river from '../assets/river.jpg'
import lake from '../assets/lake.jpg'
import roadRiver from '../assets/roadRiver.jpg'
import { FiCheckCircle } from 'react-icons/fi'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

function Carousel() {
  const photos = [
    <img src={archOcean} alt="arch rock with ocean" />,
    <img src={river} alt="river" />,
    <img src={lake} alt="lake" />,
    <img src={roadRiver} alt="river with a road" />]
  const [x, setX] = useState(0)



  const onRightHandler = () => {
    x === -100 * (photos.length - 1) ? setX(0) : setX(x - 100)
    console.log(x)

  }

  const onLeftHandler = () => {
    x === 0 ? setX(-100 * (photos.length - 1)) : setX(x + 100)
  }


  return (
    <div className='container'>
      <h1>Carousel</h1>
      <div className='outerborder'>
        <div className='parentdiv'>
          {photos.map((items, index) =>
            <div key={index} className='photo-styles' style={{ transform: `translateX(${x}%)` }}>
              {items}
            </div>
          )}
          <div className='leftbutton'>
            <button className='thebutton' onClick={onLeftHandler}>
              <i>
                < IoIosArrowDropleftCircle size={32}/>
              </i>
            </button>
          </div>
          <div className='rightbutton'>
            <button className='thebutton' onClick={onRightHandler}>
              right
              <i>
                < IoIosArrowDroprightCircle size={32}/>
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
