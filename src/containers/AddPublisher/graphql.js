/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const ADD_PUBLISHER = gql`
mutation addPublisher($PublisherInput: PublisherInput!){
    addPublisher(input: $PublisherInput){
        id
        company
    }
}
`

export const GET_PUBLISHERS = gql`
query publishers{
  publishers{
    id
    company
  }
}
`
