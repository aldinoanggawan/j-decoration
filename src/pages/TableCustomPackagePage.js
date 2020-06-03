import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const TableCustomPackagePage = () => {
  const tableCustomPackageState = useSelector(state => state.tableCustomPackage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchTableCustomPackage())
  }, [dispatch])

  const isLoading = tableCustomPackageState.isLoading
  const data = tableCustomPackageState.data

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

export default TableCustomPackagePage
