import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  opacity: 0.8;
`

const Hero = () => {
  return <Img src='/hero-image2.jpeg' alt='decoration image' />
}

export default Hero
