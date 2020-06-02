import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const TablePackage2Page = () => {
  const tablePackage2State = useSelector(state => state.tablePackage2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchTablePackage2())
  }, [dispatch])

  const isLoading = tablePackage2State.isLoading
  const data = tablePackage2State.data

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

export default TablePackage2Page
