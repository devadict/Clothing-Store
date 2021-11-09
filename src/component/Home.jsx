import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import bannerOne from '../images/banner/banner-01.jpg'
import bannerTwo from '../images/banner/banner-02.jpg'
import bannerThree from '../images/banner/banner-03.jpg'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div id="slideOne" className="slide-landing-page">
          <div>A</div>
        </div>
        <div id="slideTwo" className="slide-landing-page">
          <div>B</div>
        </div>
        <div id="slideThree" className="slide-landing-page">
          <div>C</div>
        </div>
      </Slider>
      <div className="container my-5 d-flex flex-row justify-content-center align-item-center">
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteOne">
            <span>Womenn</span>
            <span>Spring 2018</span>
          </div>
          <img src={bannerOne} alt="Banner" id="bannerOne" />
        </div>
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteTwo">
            <span>Men</span>
            <span>Spring 2018</span>
          </div>
          <img src={bannerTwo} alt="Banner" id="bannerTwo" />
        </div>
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteThree">
            <span>Accessories</span>
            <span>New Trend</span>
          </div>
          <img src={bannerThree} alt="Banner" id="bannerThree" />
        </div>
      </div>
    </>
  )
}

Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
