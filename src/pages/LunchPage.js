import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import Loader from '../components/Loader'
import PackageCard from '../components/PackageCard'

const PageContainer = styled.div`
  padding-bottom: 2em;
`

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
`

const LunchPage = () => {
  const lunchPackagesState = useSelector(state => state.lunchPackages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchLunchPackages())
  }, [dispatch])

  const isLoading = lunchPackagesState.isLoading
  const data = lunchPackagesState.data

  return (
    <PageContainer>
      <div className='container'>
        <H2>Lunch / Dinner Packages</H2>
        {isLoading ? (
          <Loader />
        ) : (
          data.length > 0 &&
          data.map(data => <PackageCard key={data.id} {...data.fields} />)
        )}
      </div>
    </PageContainer>
  )
}

export default LunchPage
