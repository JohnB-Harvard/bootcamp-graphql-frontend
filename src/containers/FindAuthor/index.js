/* eslint-disable linebreak-style */
import { useLazyQuery } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { GET_AUTHOR_FROM_BOOK, GET_AUTHOR } from './graphql'
import { FormDiv, FormInput, ResultP } from './styles'

const FindAuthor = () => {
  const [bookId, setBookId] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [author, {
    loading: idLoading, error: idError, data: idData, called: idCalled,
  }] = useLazyQuery(GET_AUTHOR, {
    variables: {
      id: authorId,
    },
  })
  const [authorFromBook, {
    loading: bookLoading, error: bookError, data: bookData, called: bookCalled,
  }] = useLazyQuery(GET_AUTHOR_FROM_BOOK, {
    variables: {
      id: bookId,
    },
  })
  return (
    <>
      <FormDiv>
        <FormInput value={authorId} onChange={e => setAuthorId(e.target.value)} placeholder="Author ID (default)" />
        <FormInput value={bookId} onChange={e => setBookId(e.target.value)} placeholder="Book ID" />
        <button
          type="submit"
          onClick={() => {
            if (authorId) {
              author()
            } else if (bookId) {
              authorFromBook()
            }
          }}
        >
            Search
        </button>
        <ResultP>Results from ID Search</ResultP>

        <ResultP>
          First name:
          { (!idLoading && idData) ? idData.author.firstName : '' }
        </ResultP>
        <ResultP>
          Last name:
          { (!idLoading && idData) ? idData.author.lastName : '' }
        </ResultP>
        <ResultP>Results from Book Search</ResultP>
        <ResultP>
            First name:
          { (!bookLoading && bookData) ? bookData.authorFromBook.firstName : '' }       
        </ResultP>
        <ResultP>
          Last name:
          { (!bookLoading && bookData) ? bookData.authorFromBook.lastName : '' }
        </ResultP>
      </FormDiv>
    </>
  )
}

export default FindAuthor
