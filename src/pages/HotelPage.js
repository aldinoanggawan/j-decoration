import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import PackageCard from '../components/PackageCard'

const PageContainer = styled.div`
  padding-bottom: 2em;
`

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
`

const HotelPage = () => {
  const hotelPackagesState = useSelector(state => state.hotelPackages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchHotelPackages())
  }, [dispatch])

  const isLoading = hotelPackagesState.isLoading
  const data = hotelPackagesState.data

  return (
    <PageContainer>
      <div className='container'>
        <H2>Hotel Room Packages</H2>
        {isLoading ? (
          <Loader />
        ) : (
          data.length > 0 &&
          data.map(data => <PackageCard key={data.id} {...data.fields} />)
        )}
      </div>
    </PageContainer>
  )
}

export default HotelPage
