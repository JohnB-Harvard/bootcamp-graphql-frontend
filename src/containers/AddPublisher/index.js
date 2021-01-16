/* eslint-disable linebreak-style */
import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ADD_PUBLISHER, GET_PUBLISHERS } from './graphql'
import { FormDiv, FormInput } from './styles'

const AddPublisherFxn = (company, phoneNumber) => {
  const [addPublisher, { error, loading }] = useMutation(ADD_PUBLISHER, {
    variables: {
      PublisherInput: {
        company,
        phoneNumber,
      },
    },
    update: (client, { data: { addPublisher } }) => {
      try {
        const data = client.readQuery({ query: GET_PUBLISHERS })
        data.publishers = [...data.publishers, addPublisher]
        client.writeQuery({ query: GET_PUBLISHERS, data })
      } catch (err) {
        console.log(err)
      }
    },
  })
  while (loading) {
    // pass
  }
  return addPublisher
}

const AddPublisher = () => {
  const [company, setCompany] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const history = useHistory()

  // Check Logged in
  if (localStorage.getItem('token') !== 'LoggedIn') {
    history.push('/Login')
  }
  return (
    <>
      <FormDiv>
        <FormInput value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
        <FormInput value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number (XXX-XXX-XXXX)" />
        <button type="submit" onClick={() => { AddPublisherFxn(company, phoneNumber) }}>Add Publisher</button>
      </FormDiv>
    </>
  )
}

export default AddPublisher
