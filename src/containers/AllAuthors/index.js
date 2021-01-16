/* eslint-disable linebreak-style */
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_AUTHORS } from './graphql'
import { DisplayDiv, ResultP } from './styles'

const AllAuthors = () => {
  const { loading: authorsLoading, error: authorsError, data: authorsData } = useQuery(GET_AUTHORS)

  if (authorsLoading) return 'Loading Authors...'
  if (authorsError) return `Error getting authors: ${authorsError}`
  return (
    <>
      <DisplayDiv>
        {authorsData.authors.map(a => (
          <ResultP>
            {a.firstName}
            {' '}
            {a.lastName}
            {' '}
            {a.books.map(b => (
              <p>
                Book:
                {b.title}
              </p>
            ))}
          </ResultP>
        ))}
      </DisplayDiv>
    </>
  )
}

export default AllAuthors
