import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as actions from '../actions'

const H2 = styled.h2`
  margin-top: 1.3em;
  text-align: left;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`
const Li = styled.li`
  & + & {
    margin-top: 0.5em;
  }
`

const Span = styled.span`
  font-weight: bold;
  color: #e0bc55;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PageContainer = styled.div`
  margin: 1em 0 2em;
`

const LoaderContainer = styled.div`
  margin-top: 1em;
  text-align: center;
`

const Img = styled.img`
  max-width: 100%;
  margin: 0 auto;
`
const SliderContainer = styled.div`
  width: 99%;
  max-width: 550px;
  margin: 0 auto;
`

const P = styled.p`
  font-size: 0.8rem;
  line-height: 1.7;
  color: black;
  opacity: 0.9;
  margin: 2.5em 0 1.5em;
`

const Button = styled.a`
  cursor: pointer;
  background: #7d99fd;
  color: #fff;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 0.75em 2.5em;

  &:focus,
  &:hover {
    opacity: 0.75;
  }
`

const LunchPackage1Page = () => {
  const lunchPackage1State = useSelector(state => state.lunchPackage1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchLunchPackage1())
  }, [dispatch])

  const isLoading = lunchPackage1State.isLoading
  const data = lunchPackage1State.data.fields

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  }

  return (
    <>
      {isLoading ? (
        <div className='container'>
          <LoaderContainer>
            <ContentLoader
              speed={2}
              width={460}
              height={600}
              viewBox='0 0 460 600'
              backgroundColor='#f3f3f3'
              foregroundColor='#ecebeb'
            >
              <rect x='15' y='358' rx='5' ry='5' width='150' height='12' />
              <rect x='1' y='1' rx='4' ry='4' width='460' height='306' />
              <rect x='356' y='570' rx='5' ry='5' width='93' height='12' />
              <rect x='11' y='557' rx='10' ry='10' width='105' height='39' />
              <rect x='15' y='398' rx='5' ry='5' width='150' height='12' />
              <rect x='15' y='438' rx='5' ry='5' width='150' height='12' />
              <rect x='15' y='478' rx='5' ry='5' width='100' height='12' />
            </ContentLoader>
          </LoaderContainer>
        </div>
      ) : (
        data && (
          <PageContainer key={uuidv4()}>
            <SliderContainer>
              <Slider {...settings}>
                {data.Photos.map(Photo => (
                  <div key={Photo.id}>
                    <Img src={Photo.url} alt={Photo.filename} />
                  </div>
                ))}
              </Slider>
            </SliderContainer>
            <div className='container'>
              <H2>{data.Name}</H2>
              <p>This package includes :</p>
              {data.Description.split('.').map(desc => (
                <Ul key={uuidv4()}>
                  <Li>{desc}</Li>
                </Ul>
              ))}
              <P>{data.Text}</P>
              <Row>
                <Button href='https://wa.me/6287877869696?text=Hi%20J%27Decoration%20!%20Saya%20mau%20book%20package%20(Lunch/Birthday/etc..)'>
                  Book
                </Button>
                <Span>IDR {data.Price.toLocaleString()}</Span>
              </Row>
            </div>
          </PageContainer>
        )
      )}
    </>
  )
}

export default LunchPackage1Page
