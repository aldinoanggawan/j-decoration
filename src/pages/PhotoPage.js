import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import DetailContainer from '../components/DetailContainer'

const PhotoPage = () => {
  const photoPackageState = useSelector(state => state.photoPackage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchPhotoPackage())
  }, [dispatch])

  const isLoading = photoPackageState.isLoading
  const data = photoPackageState.data

  return (
    <>
      {isLoading ? (
        <div className='container'>
          <Loader />
        </div>
      ) : (
        Object.keys(data).length !== 0 && (
          <DetailContainer key={data.id} {...data.fields} />
        )
      )}
    </>
  )
}

export default PhotoPage
