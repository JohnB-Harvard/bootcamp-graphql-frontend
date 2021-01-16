/* eslint-disable linebreak-style */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ADD_BOOK, GET_BOOKS } from './graphql'
import { FormDiv, FormInput } from './styles'

const AddBookFxn = (title, language, numPages, datePublished, authorId, publisherId) => {
  const [addBook, { error, loading }] = useMutation(ADD_BOOK, {
    variables: {
      "BookInput": {
        "title": title,
        "language": language,
        "numPages": numPages,
        "datePublished": datePublished,
        "authorId": authorId,
        "publisherId": publisherId
      }
    },
    update: (client, { data: { addBook } }) => {
      try {
        const data = client.readQuery({ query: GET_BOOKS })
        data.books = [...data.authors, addBook]
        client.writeQuery({ query: GET_BOOKS, data })
      } catch (err) {
        console.log(err)
      }
    },
  })
  while (loading) {
    // pass
  }
  return addBook
}

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [numPages, setNumPages] = useState('')
  const [datePublished, setDatePublished] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [publisherId, setPublisherId] = useState('')
  const history = useHistory()

  // Check Logged in
  if (localStorage.getItem('token') !== 'LoggedIn') {
    history.push('/Login')
  }
  return (
    <>
      <FormDiv>
        <FormInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <FormInput value={language} onChange={e => setLanguage(e.target.value)} placeholder="Language" />
        <FormInput value={numPages} type="number" onChange={e => setNumPages(e.target.value)} placeholder="Number of Pages" />
        <FormInput value={datePublished} onChange={e => setDatePublished(e.target.value)} placeholder="Date Published (YYYY-MM-DD)" />
        <FormInput value={authorId} onChange={e => setAuthorId(e.target.value)} placeholder="Author ID" />
        <FormInput value={publisherId} onChange={e => setPublisherId(e.target.value)} placeholder="Publisher ID" />
        <button type="submit" onClick={() => { AddBookFxn(title, language, numPages, datePublished, authorId, publisherId) }}>Add Book</button>
      </FormDiv>
    </>
  )
}

export default AddBook
