import gql from 'graphql-tag'

export const AUTH = gql`
    query auth($email: String!, $password: String!){
    auth(email: $email, password: $password)
    }
`
