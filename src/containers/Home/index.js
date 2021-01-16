/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// import { useQuery } from '@apollo/react-hooks'
import React from 'react'
// import { GET_AUTHORS, GET_BOOKS } from './graphql'

const Home = () => {
//   const { loading: authorsLoading, error: authorsError, data: authorsData } = useQuery(GET_AUTHORS)
//   const { loading: booksLoading, error: booksError, data: booksData } = useQuery(GET_BOOKS)

//   if (authorsLoading) return 'Loading Authors...'
//   if (authorsError) return `Error getting authors: ${authorsError}`
//   if (booksLoading) return 'Loading Books'
//   if (booksError) return `Error getting books: ${booksError}`

//   return (
//     <>
//       <div>
//         {authorsData.authors.map(a => (<h3>{a.firstName} {a.lastName} {a.books.map(b => <p>Book: {b.title}</p>)}</h3>))}
//       </div>
//       <div>
//         {booksData.books.map(b => (<h3>{b.title} Published By: {b.publisher.company}</h3>))}
//       </div>
//     </>
//   )
  return (
    <>
      <h3 style={{ color: 'white' }}>This is a tool to navigate the library database</h3>
    </>
  )
}

export default Home
