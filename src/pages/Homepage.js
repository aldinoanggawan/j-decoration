import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../actions'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselLoader from '../components/CarouselLoader'

const Div = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const Homepage = () => {
  const homepageCarouselState = useSelector(state => state.homepageCarousel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchHomepageCarousel())
  }, [dispatch])

  const isLoading = homepageCarouselState.isLoading
  const data = homepageCarouselState.data

  const settingsProp = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 3000,
  }

  return (
    <>
      <Div>
        {isLoading ? (
          <CarouselLoader />
        ) : (
          Object.keys(data).length !== 0 && (
            <Carousel
              key={data.id}
              Photos={data.fields.Photos}
              settingsProp={settingsProp}
            />
          )
        )}
        <div className='container'>
          <Categories />
        </div>
      </Div>
    </>
  )
}

export default Homepage
