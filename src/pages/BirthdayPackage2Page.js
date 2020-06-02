import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const BirthdayPackage2Page = () => {
  const birthdayPackage2State = useSelector(state => state.birthdayPackage2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBirthdayPackage2())
  }, [dispatch])

  const isLoading = birthdayPackage2State.isLoading
  const data = birthdayPackage2State.data

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

export default BirthdayPackage2Page
