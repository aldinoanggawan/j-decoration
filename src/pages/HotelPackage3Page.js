import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const HotelPackage3Page = () => {
  const hotelPackage3State = useSelector(state => state.hotelPackage3)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchHotelPackage3())
  }, [dispatch])

  const isLoading = hotelPackage3State.isLoading
  const data = hotelPackage3State.data

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

export default HotelPackage3Page
