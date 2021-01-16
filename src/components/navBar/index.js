/* eslint-disable linebreak-style */
import React from 'react'
import { NavDiv, LinkText } from './styles'

const NavBar = () => (
  <NavDiv>
    <LinkText to="/Home">Home</LinkText>
    <LinkText to="/AllAuthors">See all Authors</LinkText>
    <LinkText to="/AllBooks">See all Books</LinkText>
    <LinkText to="/FindAuthor">Search for Author</LinkText>
    <LinkText to="/AddAuthor">Add Author</LinkText>
    <LinkText to="/AddPublisher">Add Publisher</LinkText>
    <LinkText to="/AddBook">Add Book</LinkText>
  </NavDiv>
)

export default NavBar
