import React from 'react'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'

const LoaderContainer = styled.div`
  margin-top: 0.3em;
  text-align: center;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <ContentLoader
        speed={2}
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
  )
}

export default Loader
