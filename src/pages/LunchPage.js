import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ContentLoader from 'react-content-loader'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'

const LoaderContainer = styled.div`
  text-align: center;
`

const PageContainer = styled.div`
  padding-bottom: 2em;
`

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
`

const Card = styled.div`
  padding-bottom: 1em;
  border: 2px solid #ececec;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 10px 2px;

  & + & {
    margin-top: 2em;
  }
`

const CardImage = styled.div`
  text-align: center;
`

const CardDescription = styled.div`
  padding: 0 1em;
`

const Img = styled.img`
  max-width: 100%;
`

const H4 = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 0.9rem;
`

const Li = styled.li`
  & + & {
    margin-top: 0.5em;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.span`
  margin: 1em 0;
`

const LinkStyled = styled(Link)`
  background: #7d99fd;
  color: #fff;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 0.75em 2.5em;

  &:focus,
  &:hover {
    opacity: 0.75;
  }
`

const Span = styled.span`
  font-weight: bold;
  color: #e0bc55;
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
          <LoaderContainer>
            <ContentLoader
              speed={2}
              width={460}
              height={600}
              viewBox='0 0 460 600'
              backgroundColor='#f3f3f3'
              foregroundColor='#ecebeb'
            >
              <rect x='15' y='358' rx='5' ry='5' width='150' height='12' />
              <rect x='1' y='1' rx='4' ry='4' width='460' height='306' />
              <rect x='356' y='570' rx='5' ry='5' width='93' height='12' />
              <rect x='11' y='557' rx='10' ry='10' width='105' height='39' />
              <rect x='15' y='398' rx='5' ry='5' width='150' height='12' />
              <rect x='15' y='438' rx='5' ry='5' width='150' height='12' />
              <rect x='15' y='478' rx='5' ry='5' width='100' height='12' />
            </ContentLoader>
          </LoaderContainer>
        ) : data.length > 0 ? (
          data.map(data => {
            const { Name, Price, Photos, Description } = data.fields
            const descArray = Description.split(',')
            const exactPrice = Price.toLocaleString()

            return (
              <Card key={data.id}>
                <CardImage>
                  {Photos.map(Photo => (
                    <Img key={Photo.id} src={Photo.url} alt={Photo.filename} />
                  ))}
                </CardImage>
                <CardDescription>
                  <H4>{Name}</H4>
                  <p>Package Included :</p>
                  {descArray.map(desc => (
                    <Ul key={uuidv4()}>
                      <Li>{desc}</Li>
                    </Ul>
                  ))}
                  <Row>
                    <Button>
                      <LinkStyled to='/category/lunch-dinner/package-1'>
                        Details
                      </LinkStyled>
                    </Button>
                    <Span>IDR {exactPrice}</Span>
                  </Row>
                </CardDescription>
              </Card>
            )
          })
        ) : null}
      </div>
    </PageContainer>
  )
}

export default LunchPage
