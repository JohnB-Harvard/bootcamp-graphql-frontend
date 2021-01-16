/* eslint-disable linebreak-style */
import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { GET_BOOKS } from './graphql'
import { ResultP, DisplayDiv } from './styles'

const AllBooks = () => {
  const { loading: booksLoading, error: booksError, data: booksData } = useQuery(GET_BOOKS)

  if (booksLoading) return 'Loading Books'
  if (booksError) return `Error getting books: ${booksError}`

  return (
    <>
      <DisplayDiv>
        {booksData.books.map(b => (
          <ResultP>
            {b.title}
            {' '}
          Published By:
            {' '}
            {b.publisher.company}
          </ResultP>
        ))}
      </DisplayDiv>
    </>
  )
}

export default AllBooks
