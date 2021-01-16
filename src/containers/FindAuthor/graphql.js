/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const GET_AUTHOR = gql`
    query author($id: ID!){
        author(id: $id){
            id
            firstName
            lastName
        }
    }
`

export const GET_AUTHOR_FROM_BOOK = gql`
    query authorFromBook($id: ID!){
        authorFromBook(bookId: $id){
            id
            firstName
            lastName
        }
    }
`
