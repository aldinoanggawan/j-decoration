import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const Header = styled.header`
  background-color: #feffff;
  text-align: center;
  padding: 1em 0;
`

const Container = styled.div`
  width: 100%;
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
  margin-left: 1.5em;
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
  width: 60px;
`

const Nav = styled.nav`
  width: 100%;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  position: ${props => (props.open ? 'relative' : 'absolute')};
  height: ${props => (props.open ? 'auto' : '0')};
  box-shadow: ${props =>
    props.open ? '0px 6px 5px -3px rgba(209,209,209,1)' : 'none'};
  transition: opacity 1000ms ease;
`

const NavList = styled.ul`
  list-style: none;
  margin: 1em 0 0;
  padding: 0;
`

const NavItem = styled.li`
  &:hover,
  &:focus {
    background: #ececec;
    opacity: 0.7;
  }
`

const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 0.65em 0;
  text-decoration: none;
  color: black;

  &.active {
    color: #e0bc55;
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

        <Logo to='/'>
          <Img src='/logo.jpg' alt='header-logo' />
        </Logo>
        {isOpen && (
          <Nav open>
            <NavList>
              <NavItem>
                <NavLinkStyled activeClassName='active' exact to='/'>
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  activeClassName='active'
                  exact
                  to='/category/lunch-dinner'
                >
                  Lunch / Dinner
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  activeClassName='active'
                  exact
                  to='/category/birthday-dessert'
                >
                  Birthday / Dessert Table
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  activeClassName='active'
                  exact
                  to='/category/table-setting'
                >
                  Table Setting / Bridal Shower
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  activeClassName='active'
                  exact
                  to='/category/hotel-room'
                >
                  Hotel Room
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled
                  activeClassName='active'
                  exact
                  to='/category/photo-booth'
                >
                  Photo Booth
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
