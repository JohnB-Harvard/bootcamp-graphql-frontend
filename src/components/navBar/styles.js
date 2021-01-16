/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavDiv = styled.div`
    width: 100%;
    background-color: purple;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LinkText = styled(Link)`
    color: lime;
    font-size: 2em;
    text-decoration: none;
    background-color: purple;
    border-width: 3px;
    border-color: white;
    transition: color .255s ease;
    transition: background-color .225s ease;
    text-align: center;
    &:hover{
        color: purple;
        background-color: lime;
    }
`
