import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const BirthdayCustomPackagePage = () => {
  const birthdayCustomPackageState = useSelector(
    state => state.birthdayCustomPackage
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBirthdayCustomPackage())
  }, [dispatch])

  const isLoading = birthdayCustomPackageState.isLoading
  const data = birthdayCustomPackageState.data

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

export default BirthdayCustomPackagePage
