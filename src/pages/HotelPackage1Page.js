import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const HotelPackage1Page = () => {
  const hotelPackage1State = useSelector(state => state.hotelPackage1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchHotelPackage1())
  }, [dispatch])

  const isLoading = hotelPackage1State.isLoading
  const data = hotelPackage1State.data

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        Object.keys(data).length !== 0 && (
          <DetailContainer key={data.id} {...data.fields} />
        )
      )}
    </>
  )
}

export default HotelPackage1Page
