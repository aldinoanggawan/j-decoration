import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  &.Row__last {
    justify-content: center;
  }
`
const Col = styled.div`
  & + & {
    margin-left: 1em;
  }
`

const H2 = styled.h2`
  text-align: center;
`

const CardContainer = styled.div`
  margin-top: 1em;
`

const Card = styled.div`
  /* width: 100%; */
  border: 2px solid #ececec;
  border-radius: 10px;
  padding: 1em 0;
  margin: 0;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;

  & + & {
    margin-top: 1em;
  }

  &.card__last {
    margin-top: 1em;
    max-width: 50%;
  }
`

const CardItem = styled.div`
  text-align: center;
`

const Img = styled.img`
  max-width: 25%;
`

const P = styled.p`
  /* margin-bottom: 3em; */
`

const Button = styled.p`
  margin-top: 3.5em;
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

const Categories = () => {
  return (
    <>
      <H2>Choose category</H2>
      <CardContainer>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <Img src='/dinner-icon.png' alt='dinner icon for card' />
                <P>
                  Lunch /<br />
                  Dinner
                </P>
                <Button>
                  <LinkStyled to='/category/lunch-dinner'>Select</LinkStyled>
                </Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/table-icon.png' alt='table icon for card' />
                <P>
                  Table Setting /<br />
                  Bridal Shower
                </P>
                <Button>
                  <LinkStyled to='/category/table-setting'>Select</LinkStyled>
                </Button>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Img src='/birthday-icon.png' alt='birthday icon for card' />
                <P>
                  Birthday /<br />
                  Dessert Table
                </P>
                <Button>
                  <LinkStyled to='/category/birthday-dessert'>
                    Select
                  </LinkStyled>
                </Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/bed-icon.png' alt='bed icon for card' />
                <P>
                  Hotel Room <br />
                  <br />
                </P>
                <Button>
                  <LinkStyled to='/category/hotel-room'>Select</LinkStyled>
                </Button>
              </CardItem>
            </Card>
          </Col>
        </Row>
        <Row className='Row__last'>
          <Card className='card__last'>
            <CardItem>
              <Img src='/photo-icon.png' alt='photo icon for card' />
              <P>
                Photo Booth
                <br />
                <br />
              </P>
              <Button>
                <LinkStyled to='/category/photo-booth'>Select</LinkStyled>
              </Button>
            </CardItem>
          </Card>
        </Row>
      </CardContainer>
    </>
  )
}

export default Categories
