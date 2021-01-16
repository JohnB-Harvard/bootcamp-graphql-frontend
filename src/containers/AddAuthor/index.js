/* eslint-disable linebreak-style */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ADD_AUTHOR_NO_ADDR, ADD_AUTHOR_W_ADDR, GET_AUTHORS } from './graphql'
import { FormDiv, FormInput, MyP } from './styles'

const AddAuthorWAddressFxn = (firstName, lastName, age, email, city, street, state, zip) => {
  const [addAuthor, { error, loading }] = useMutation(ADD_AUTHOR_W_ADDR, {
    variables: {
      AuthorInput: {
        firstName,
        lastName,
        age,
        email,
        address: {
          city,
          street,
          state,
          zip,
        },
      },
    },
    update: (client, { data: { addAuthor } }) => {
      try {
        const data = client.readQuery({ query: GET_AUTHORS })
        data.authors = [...data.authors, addAuthor]
        client.writeQuery({ query: GET_AUTHORS, data })
      } catch (err) {
        console.log(err)
      }
    },
  })
  while (loading) {
    // pass
  }
  return addAuthor
}
const AddAuthorNoAddressFxn = (firstName, lastName, age, email) => {
  const [addAuthor, { error, loading }] = useMutation(ADD_AUTHOR_NO_ADDR, {
    variables: {
      AuthorInput: {
        firstName,
        lastName,
        age,
        email,
      },
    },
    update: (client, { data: { addAuthor } }) => {
      try {
        const data = client.readQuery({ query: GET_AUTHORS })
        data.authors = [...data.authors, addAuthor]
        client.writeQuery({ query: GET_AUTHORS, data })
      } catch (error) {
        console.log(error)
      }
    },
  })
  while (loading) {
    // pass
  }
  return addAuthor
}

const AddAuthor = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState(false)
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const history = useHistory()

  // Check Logged in
  if (localStorage.getItem('token') !== 'LoggedIn') {
    history.push('/Login')
  }
  return (
    <>
      <FormDiv>
        <FormInput value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
        <FormInput value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
        <FormInput value={age} type="number" onChange={e => setAge(e.target.value)} placeholder="Age" />
        <FormInput value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <MyP>Include Address?</MyP>
        <FormInput checked={address} type="checkbox" onChange={e => setAddress(e.target.checked)} /> 
        <FormInput value={street} onChange={e => setStreet(e.target.value)} placeholder="Street" />
        <FormInput value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
        <FormInput value={state} onChange={e => setState(e.target.value)} placeholder="State" />
        <FormInput value={zip} onChange={e => setZip(e.target.value)} placeholder="Zipcode" />
        <button
          type="submit"
          onClick={() => {
            if (address) {
              if (age > -1 && firstName && lastName && email && city && street & city && zip) {
                AddAuthorWAddressFxn(firstName, lastName, age, email, city, street, state, zip)
              }
            } else if (age > -1 && firstName && lastName && email) {
              AddAuthorNoAddressFxn(firstName, lastName, age, email)
            }
          }}
        >
          Add Author
        </button>
      </FormDiv>
    </>
  )
}

export default AddAuthor
