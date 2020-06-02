import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const LunchPackage1Page = () => {
  const lunchPackage1State = useSelector(state => state.lunchPackage1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchLunchPackage1())
  }, [dispatch])

  const isLoading = lunchPackage1State.isLoading
  const data = lunchPackage1State.data

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

export default LunchPackage1Page
