/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const ADD_AUTHOR_NO_ADDR = gql`
    mutation addAuthor($AuthorInput: AuthorInput!){
        addAuthor(input: $AuthorInput){
            id
            firstName
            lastName
            email
            age
        }
    }
`

export const ADD_AUTHOR_W_ADDR = gql`
    mutation addAuthor($AuthorInput: AuthorInput!){
        addAuthor(input: $AuthorInput){
            id
            firstName
            lastName
            email
            age
            address {
                id
                street
                city
                state
                zip
            }
        }
    }
`

export const GET_AUTHORS = gql`
    query authors{
        authors{
            id
            firstName
            lastName
            age
            books{
                title
            }
        }
    }
`
