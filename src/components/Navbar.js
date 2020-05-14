import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const Header = styled.header`
  background-color: #feffff;
  text-align: center;
  padding: 0.75em 0;
`

const Container = styled.div`
  /* display: flex;
  justify-content: space-between; */
  width: 95%;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
`

const NavToggle = styled.button`
  cursor: pointer;
  border: 0;
  width: 3em;
  height: 3em;
  padding: 0;
  border-radius: 50%;
  background: #ececec;
  color: black;
  transition: opacity 500ms ease;

  position: absolute;
  left: 0;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    opacity: ${props => (props.toggleFocus ? '0.5' : '1')};
    outline: 0;
  }
`

const Hamburger = styled.span`
  width: 50%;
  position: relative;

  &,
  &::before,
  &::after {
    display: block;
    margin: 0 auto;
    height: 3px;
    background: black;
  }
  &::before,
  &::after {
    content: '';
    width: 100%;
  }

  &::before {
    transform: translateY(-6px);
  }

  &::after {
    transform: translateY(3px);
  }
`

const Logo = styled(Link)`
  height: 30px;
`

const Img = styled.img`
  max-width: 10%;
`

const Nav = styled.nav`
  width: 100%;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  position: ${props => (props.open ? 'relative' : 'absolute')};
  transition: opacity 1000ms ease;
  height: ${props => (props.open ? 'auto' : '0')};
`

const NavList = styled.ul`
  list-style: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin-top: 1.5em;
  border-bottom: 1px solid #ececec;
`

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  &.active {
    color: blue;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Header>
      <Container>
        {isOpen ? (
          <NavToggle toggleFocus onClick={toggleHandler}>
            <Hamburger></Hamburger>
          </NavToggle>
        ) : (
          <NavToggle onClick={toggleHandler}>
            <Hamburger></Hamburger>
          </NavToggle>
        )}

        <Logo exact to='/'>
          <Img src='/logo.jpg' alt='header-logo' />
        </Logo>
        {isOpen ? (
          <Nav open>
            <NavList>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/'>
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/category'>
                  Category
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/contact'>
                  Contact
                </NavLinkStyled>
              </NavItem>
            </NavList>
          </Nav>
        ) : (
          <Nav>
            <NavList>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/'>
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/category'>
                  Category
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/contact'>
                  Contact
                </NavLinkStyled>
              </NavItem>
            </NavList>
          </Nav>
        )}
      </Container>
    </Header>
  )
}

export default Navbar
