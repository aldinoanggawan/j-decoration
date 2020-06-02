import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  margin: 0 auto;
`

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
}

const Carousel = ({ Photos }) => {
  return (
    <Slider {...settings}>
      {Photos.map(Photo => (
        <div key={Photo.id}>
          <Img src={Photo.url} alt={Photo.filename} />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
