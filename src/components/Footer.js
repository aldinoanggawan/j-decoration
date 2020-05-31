import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faWhatsapp,
  faLine,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
  margin-top: 7em;
  padding: 0.5em 0 0.1em;
  background: #ff667d;
  text-align: center;
  color: white;
`

const FooterTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 5px;
`

const FooterItem = styled.div`
  margin-top: 2.5em;
`

const FooterItemTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 0.5em;
`

const P = styled.p`
  margin: 0;
  line-height: 1.4;
  font-size: 0.9rem;

  & + & {
    margin-top: 0.4em;
  }
`

const Contact = styled.div`
  font-size: 0.9rem;

  & + & {
    margin-top: 0.8em;
  }
`

const Span = styled.span`
  margin-left: 0.5em;
`

const A = styled.a`
  text-decoration: none;
  color: white;
  opacity: 0.7;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

const Credit = styled.p`
  margin-top: 8em;
  font-size: 0.6rem;
  text-align: center;
`

const Footer = () => {
  return (
    <Div>
      <div className='container'>
        <FooterTitle>J'Decoration</FooterTitle>
        <FooterItem>
          <FooterItemTitle>About Our Company</FooterItemTitle>
          <P>
            J decoration was established in 2016 and have been providing
            decoration services in Samarinda, Kalimantan Timur, Indonesia.
          </P>
          <P>
            Being a part of She’s Cha production a well known event organizer in
            Samarinda, we are a thriving platform that ensures the satisfaction
            of our customers.
          </P>
          <P>
            As such, we have wide varieties of packages that are customisable
            based on your liking to fulfill your decoration needs.
          </P>
        </FooterItem>
        <FooterItem>
          <FooterItemTitle>Contact Us</FooterItemTitle>
          <Contact>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
            <Span>
              <A href='https://instagram.com/jdecoration_'>@jdecoration_</A>
            </Span>
          </Contact>
          <Contact>
            <FontAwesomeIcon icon={faWhatsapp} size='lg' />
            <Span>
              <A href='https://wa.me/6287877869696'>+6287877869696</A>
            </Span>
          </Contact>
          <Contact>
            <FontAwesomeIcon icon={faLine} size='lg' />
            <Span>JDECORATION_</Span>
          </Contact>
        </FooterItem>
        <Credit>
          Created with <FontAwesomeIcon icon={faReact} /> by{' '}
          <A href='https://instagram.com/aldinoanggawan'>Aldino Anggawan</A>
        </Credit>
      </div>
    </Div>
  )
}

export default Footer
