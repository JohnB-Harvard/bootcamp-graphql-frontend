import styled from 'styled-components'

export const LoginInput = styled.input`
    font-size: 1em;
    background-color: transparent;
    color: lightgray;
    border: none;
    transition: border .225s ease;
    font-family: Helvetica, Georgia, Times, serif;
    &:hover{
        border-width: 2px;
        border-radius: 2px;
        border-style: solid;
        border-color: grey;
    }
`

export const LoginDiv = styled.div`
    background-color: #444444;
    display: flex;
    flex-direction: column;
`
