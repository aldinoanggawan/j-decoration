import React from 'react'
import styled from 'styled-components'
import CategoryCard from './CategoryCard'

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

const Categories = () => {
  return (
    <Div>
      <H2>Choose category</H2>
      <CardContainer>
        <Row>
          <Col>
            <CategoryCard
              cardSrc='/dinner-icon.png'
              cardAlt='dinner icon for card'
              cardText='Lunch /<br />Dinner'
              cardLink='/category/lunch-dinner'
            />
            <CategoryCard
              cardSrc='/table-icon.png'
              cardAlt='table icon for card'
              cardText='Table Setting /<br />Bridal Shower'
              cardLink='/category/table-setting'
            />
          </Col>
          <Col>
            <CategoryCard
              cardSrc='/birthday-icon.png'
              cardAlt='birthday icon for card'
              cardText='Birthday /<br />Dessert Table'
              cardLink='/category/birthday-dessert'
            />
            <CategoryCard
              cardSrc='/bed-icon.png'
              cardAlt='bed icon for card'
              cardText='Hotel Room<br /><br />'
              cardLink='/category/hotel-room'
            />
          </Col>
        </Row>
        <Row className='Row__last'>
          <CategoryCard
            cardSrc='/photo-icon.png'
            cardAlt='photo icon for card'
            cardText='Photo Booth<br /><br />'
            cardLink='/category/photo-booth'
            className='card__last'
          />
        </Row>
      </CardContainer>
    </Div>
  )
}

export default Categories
