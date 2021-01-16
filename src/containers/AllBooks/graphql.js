/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

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
