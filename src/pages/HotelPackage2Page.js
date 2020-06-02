import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const HotelPackage2Page = () => {
  const hotelPackage2State = useSelector(state => state.hotelPackage2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchHotelPackage2())
  }, [dispatch])

  const isLoading = hotelPackage2State.isLoading
  const data = hotelPackage2State.data

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

export default HotelPackage2Page
