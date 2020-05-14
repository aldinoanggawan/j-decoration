import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  border: 2px solid #ececec;
  border-radius: 10px;
  padding: 1em 0;

  & + & {
    margin-top: 1em;
  }
`

const CardItem = styled.div`
  text-align: center;
`

const Img = styled.img`
  max-width: 25%;
`

const P = styled.p``

const Button = styled.button`
  background: #7d99fd;
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  border: none;
  border-radius: 5px;
  margin-top: 2em;
  padding: 0.75em 2em;
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
                <Img src='/dinner-icon.png' alt='birthday icon for card' />
                <P>Lunch / Dinner</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/bridal-icon.png' alt='birthday icon for card' />
                <P>Bridal Shower</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/sweet-icon.png' alt='birthday icon for card' />
                <P>Sweet Corner</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardItem>
                <Img src='/birthday-icon.png' alt='birthday icon for card' />
                <P>Birthday</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/event-icon2.png' alt='birthday icon for card' />
                <P>Event</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Img src='/table-icon.png' alt='birthday icon for card' />
                <P>Table Setting</P>
                <Button>Select</Button>
              </CardItem>
            </Card>
          </Col>
        </Row>
      </CardContainer>
    </>
  )
}

export default Categories
