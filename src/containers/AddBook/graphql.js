/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

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
