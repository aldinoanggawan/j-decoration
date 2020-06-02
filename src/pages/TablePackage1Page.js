import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const TablePackage1Page = () => {
  const tablePackage1State = useSelector(state => state.tablePackage1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchTablePackage1())
  }, [dispatch])

  const isLoading = tablePackage1State.isLoading
  const data = tablePackage1State.data

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

export default TablePackage1Page
