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
