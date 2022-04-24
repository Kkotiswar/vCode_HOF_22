// import react-bootstrap-css 
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Caraousel.css';
import Post from '../post/Post'

const Caraousel = () => {
  return (
    <div className='cr-container'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className='cr'>
            {/* hiii */}
          </div>
          <Carousel.Caption>
            <h3 className="cara" >A new way to ACE in Competitive Programing</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='cr'>
            {/* hiii 1 */}
          </div>
          <Carousel.Caption>
            <h3 className="cara" >Practice from Question recommended by top Coders</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='cr'>
            {/* hii 2 */}
          </div>
          <Carousel.Caption>
            <h3 className="cara" >Post your doubts and get its best solution</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Post />
    </div>
  )
}

export default Caraousel