import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const LunchPackage2Page = () => {
  const lunchPackage2State = useSelector(state => state.lunchPackage2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchLunchPackage2())
  }, [dispatch])

  const isLoading = lunchPackage2State.isLoading
  const data = lunchPackage2State.data

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

export default LunchPackage2Page
