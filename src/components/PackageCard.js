import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.5em 0 0.7em;
`

const P = styled.p`
  font-size: 1rem;
  margin: 0 0 0.5em;
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

const Ul = styled.ul`
  list-style: none;
  margin: 0 0 1em;
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

const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #e0bc55;
  display: block;
`

const PackageCard = ({ Name, Price, Photos, Description, DetailLink }) => {
  const descArray = Description.split('.')
  const priceArray = Price.split('.')

  return (
    <Card>
      <CardImage>
        {Photos.map(Photo => (
          <Img key={Photo.id} src={Photo.url} alt={Photo.filename} />
        ))}
      </CardImage>
      <CardDescription>
        <H4>{Name}</H4>
        <P>Package Includes :</P>
        <Ul>
          {descArray.map(desc => (
            <Li key={uuidv4()}>{desc}</Li>
          ))}
        </Ul>
        <Row>
          <div>
            {priceArray.length > 1 ? (
              priceArray.map(price => <Span key={uuidv4()}>{price}</Span>)
            ) : (
              <Span>{Price}</Span>
            )}
          </div>
          <Button>
            <LinkStyled to={DetailLink}>Details</LinkStyled>
          </Button>
        </Row>
      </CardDescription>
    </Card>
  )
}

export default PackageCard
