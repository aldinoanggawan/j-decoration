import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Categories from '../components/Categories'

const Div = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const Homepage = () => {
  return (
    <>
      <Div>
        <Hero />
        <div className='container'>
          <Categories />
        </div>
      </Div>
    </>
  )
}

export default Homepage
