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

const BirthdayPage = () => {
  const birthdayPackagesState = useSelector(state => state.birthdayPackages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBirthdayPackages())
  }, [dispatch])

  const isLoading = birthdayPackagesState.isLoading
  const data = birthdayPackagesState.data

  return (
    <PageContainer>
      <div className='container'>
        <H2>Birthday / Dessert Table Packages</H2>
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

export default BirthdayPage
