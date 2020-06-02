import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
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

const P = styled.div`
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

const CategoryCard = ({ cardSrc, cardAlt, cardText, cardLink, className }) => {
  return (
    <>
      {className ? (
        <Card className={className}>
          <CardItem>
            <ImgContainer>
              <Img src={cardSrc} alt={cardAlt} />
            </ImgContainer>
            <P dangerouslySetInnerHTML={{ __html: cardText }} />
            <Button>
              <LinkStyled to={cardLink}>Select</LinkStyled>
            </Button>
          </CardItem>
        </Card>
      ) : (
        <Card>
          <CardItem>
            <ImgContainer>
              <Img src={cardSrc} alt={cardAlt} />
            </ImgContainer>
            <P dangerouslySetInnerHTML={{ __html: cardText }} />
            <Button>
              <LinkStyled to={cardLink}>Select</LinkStyled>
            </Button>
          </CardItem>
        </Card>
      )}
    </>
  )
}

export default CategoryCard
