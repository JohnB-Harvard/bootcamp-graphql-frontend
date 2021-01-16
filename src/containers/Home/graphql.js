/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

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

export const GET_BOOKS = gql`
    query books{
        books{
            title
            datePublished
            publisher{
                id
                company
            }
            numPages
            language
        }
    }
`

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

export const ADD_BOOK = gql`
    mutation addBook($BookInput: BookInput!){
            addBook(input: $BookInput){
                id
                title
                numPages
                author{
                    id
                    firstName
                    lastName
                }
                publisher{
                    id
                    company
                    address{
                        id
                        city
                    }
                }
            }
        }
`
