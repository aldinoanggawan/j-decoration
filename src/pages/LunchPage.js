import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageContainer = styled.div`
  padding-bottom: 2em;
`

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1.5em;
`

const Card = styled.div`
  padding: 0.1em 0 0.5em;
  border: 2px solid #ececec;
  border-radius: 10px;

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
  max-width: 99.6%;
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
  return (
    <PageContainer>
      <div className='container'>
        <H2>Lunch / Dinner Packages</H2>
        <Card>
          <CardImage>
            <Img src='/dinner1a.jpeg' alt='dinner package 1' />
          </CardImage>
          <CardDescription>
            <H4>Package 1</H4>
            <Ul>
              <Li>- Name Tag</Li>
              <Li>- Table Mat</Li>
              <Li>- Table Decoration</Li>
              <Li>- Chair Decoration</Li>
              <Li>- Printed Photos 3/4r (2 pcs R)</Li>
            </Ul>
            <Row>
              <Button>
                <LinkStyled>Details</LinkStyled>
              </Button>
              <Span>IDR 400,000</Span>
            </Row>
          </CardDescription>
        </Card>
        <Card>
          <CardImage>
            <Img src='/dinner2a.jpeg' alt='dinner package 2' />
          </CardImage>
          <CardDescription>
            <H4>Package 2</H4>
            <Ul>
              <Li>- Name Tag</Li>
              <Li>- Table Mat</Li>
              <Li>- Mini Tart</Li>
              <Li>- Bunting flag</Li>
              <Li>- Table Decoration</Li>
              <Li>- Chair Decoration</Li>
              <Li>- Printed Photos 3/4r (2 pcs R)</Li>
            </Ul>
            <Row>
              <Button>
                <LinkStyled>Details</LinkStyled>
              </Button>
              <Span>IDR 575,000</Span>
            </Row>
          </CardDescription>
        </Card>
      </div>
    </PageContainer>
  )
}

export default LunchPage
