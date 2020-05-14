import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Categories from '../components/Categories'

const Div = styled.div`
  padding-bottom: 2em;
  margin: 0 auto;
  max-width: 600px;
`

const Container = styled.div`
  width: 95%;
  max-width: 550px;
  margin: 0 auto;
`

const Homepage = () => {
  return (
    <Div>
      <Hero />
      <Container>
        <Categories />
      </Container>
    </Div>
  )
}

export default Homepage
