import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const H2 = styled.h2`
  margin-top: 1.3em;
  font-weight: 600;
  text-align: left;
`

const P = styled.p`
  font-size: 1rem;
`

const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #e0bc55;
  display: block;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PageContainer = styled.div`
  margin: 0 0 2em;
`

const SliderContainer = styled.div`
  width: 99%;
  max-width: 550px;
  margin: 0 auto;
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

const Desc = styled.p`
  line-height: 1.5;
`

const DescText = styled.p`
  font-size: 0.8rem;
  line-height: 1.7;
  color: black;
  opacity: 0.9;
  margin: 2.5em 0 1.5em;
`

const Button = styled.a`
  cursor: pointer;
  background: #7d99fd;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1.5px;
  border: none;
  border-radius: 5px;
  padding: 0.75em 1.75em;

  &:focus,
  &:hover {
    opacity: 0.75;
  }
`

const DetailContainer = ({ Photos, Name, Description, Text, Price }) => {
  const descArray = Description.split('.')
  const priceArray = Price.split('.')

  return (
    <PageContainer>
      <SliderContainer>
        <Carousel Photos={Photos} />
      </SliderContainer>
      <div className='container'>
        <H2>{Name}</H2>
        <P>This package includes :</P>
        {descArray.length > 1 ? (
          <Ul>
            {descArray.map(description => (
              <Li key={uuidv4()}>{description}</Li>
            ))}
          </Ul>
        ) : (
          <Desc>{Description}</Desc>
        )}
        <DescText>{Text}</DescText>
        <Row>
          <div>
            {priceArray.length > 1 ? (
              priceArray.map(price => <Span key={uuidv4()}>{price}</Span>)
            ) : (
              <Span>{Price}</Span>
            )}
          </div>
          <Button href='https://wa.me/6287877869696?text=Hallo%20kak%20saya%20mau%20nanya%20dekorasi...'>
            <FontAwesomeIcon icon={faWhatsapp} /> Book
          </Button>
        </Row>
      </div>
    </PageContainer>
  )
}

export default DetailContainer
