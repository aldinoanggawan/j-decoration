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
  font-weight: 600;
`

const Div = styled.div`
  margin-top: 2em;
`

const CardContainer = styled.div`
  margin-top: 1.5em;
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

const ImgContainer = styled.div`
  background: #f3f5f6;
  border: 11px solid #fafafa;
  border-radius: 50%;
  width: 40%;
  margin: 0 auto;
`

const Img = styled.img`
  max-width: 80%;
`

const P = styled.p`
  margin: 1em 0;
  font-size: 1rem;
  line-height: 1.1;
`

const Button = styled.p`
  margin-top: 2em;
`

const LinkStyled = styled(Link)`
  background: #7d99fd;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1.5px;
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
    <Div>
      <H2>Choose category</H2>
      <CardContainer>
        <Row>
          <Col>
            <Card>
              <CardItem>
                <ImgContainer>
                  <Img src='/dinner-icon.png' alt='dinner icon for card' />
                </ImgContainer>
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
                <ImgContainer>
                  <Img src='/table-icon.png' alt='table icon for card' />
                </ImgContainer>
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
                <ImgContainer>
                  <Img src='/birthday-icon.png' alt='birthday icon for card' />
                </ImgContainer>
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
                <ImgContainer>
                  <Img src='/bed-icon.png' alt='bed icon for card' />
                </ImgContainer>
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
              <ImgContainer>
                <Img src='/photo-icon.png' alt='photo icon for card' />
              </ImgContainer>
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
    </Div>
  )
}

export default Categories
