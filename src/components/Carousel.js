import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'

const ImgFade = styled.img`
  max-width: 100%;
  margin: 0 auto;
  opacity: 0.9;
`

const Img = styled.img`
  max-width: 100%;
  margin: 0 auto;
`

const Div = styled.div`
  /* max-height: 200px; */
  /* overflow: hidden; */
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

const Carousel = ({ Photos, settingsProp }) => {
  return (
    <>
      {settingsProp ? (
        <Slider {...settingsProp}>
          {Photos &&
            Photos.map(Photo => (
              <Div key={Photo.id}>
                <ImgFade src={Photo.url} alt={Photo.filename} />
              </Div>
            ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {Photos &&
            Photos.map(Photo => (
              <div key={Photo.id}>
                <Img src={Photo.url} alt={Photo.filename} />
              </div>
            ))}
        </Slider>
      )}
    </>
  )
}

export default Carousel
