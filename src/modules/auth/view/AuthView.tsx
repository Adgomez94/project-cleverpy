import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import utils from '../../../utils/utils'
import useForm from '../hooks/useForm'
import { actionAuth } from '../store'


interface initialForm {
  email: string,
  password: string
}

const initialStateForm:initialForm = {
  email: 'adrian@cleverpy.com',
  password: 'Cleverpy2022**'
}

const AuthView = () => {

  const [isError, setIsError] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authLogin } = bindActionCreators(actionAuth, dispatch)

  const { formValues, handleInputChange } = useForm(initialStateForm)
  const { email, password } = formValues

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!utils.regexEmail(email) || !utils.regexPassword(password)) {
      setIsError(true)
      return
    } 

    setIsError(false)
    dispatch(authLogin({ email, isAuthenticated: true }))
    navigate('/')
  }
  return (
  <>
    <form
      onSubmit={handleSubmit}
      className="container-auth">

      <div className="header">Login To Your Account</div>
      <div className="wrap">
        <div className="group"> 
          <input           
            onChange={handleInputChange} 
            value={email}
            type="email"
            name="email"
            placeholder="Email" />
        </div>
        <div className="group">
          <input
            onChange={handleInputChange}
            value={password} 
            type="password"
            name="password"
            placeholder="Password" />
        </div>
        <div className="group">
          <button className="btn btn-green btn--1" type='submit'>Login</button>
        </div>
        {

          isError && <span className="error-message">Email o contraseña incorrecto</span> 
        }
      </div>
    </form> 
  </>

  )
}

export default AuthView