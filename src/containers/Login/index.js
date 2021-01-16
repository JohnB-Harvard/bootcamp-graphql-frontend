import { useLazyQuery } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AUTH } from './graphql'
import { LoginDiv, LoginInput } from './styles'

const Auth = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, {
    loading: authLoading, error: authError, data: authData, called: authCalled,
  }] = useLazyQuery(AUTH, {
    variables: { email, password },
  })
  return (
    <LoginDiv>
      <LoginInput value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <LoginInput value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button
        type="submit"
        onClick={() => {
          auth()
          try {
            if (!authLoading && authData.auth) {
              localStorage.setItem('token', 'LoggedIn')
              history.push('/home')
            }
          } catch (err) {
            // pass. This is here b/c authData is undefined at first and this fix worked
          }
        }}
      >
Log In
      </button>
    </LoginDiv>
  )
}

export default Auth
