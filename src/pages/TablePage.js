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
  const tablePackagesState = useSelector(state => state.tablePackages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchTablePackages())
  }, [dispatch])

  const isLoading = tablePackagesState.isLoading
  const data = tablePackagesState.data

  return (
    <PageContainer>
      <div className='container'>
        <H2>Table Setting / Bridal Shower Packages</H2>
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
