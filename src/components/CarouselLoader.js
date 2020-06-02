import React from 'react'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'

const LoaderContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`

const CarouselLoader = () => {
  return (
    <LoaderContainer>
      <ContentLoader
        speed={1}
        viewBox='0 0 460 180'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='1' y='0' rx='0' ry='0' width='460' height='306' />
      </ContentLoader>
    </LoaderContainer>
  )
}

export default CarouselLoader
