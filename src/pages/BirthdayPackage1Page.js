import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const BirthdayPackage1Page = () => {
  const birthdayPackage1State = useSelector(state => state.birthdayPackage1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBirthdayPackage1())
  }, [dispatch])

  const isLoading = birthdayPackage1State.isLoading
  const data = birthdayPackage1State.data

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

export default BirthdayPackage1Page
