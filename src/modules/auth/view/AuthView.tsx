import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import utils from '../../../utils/utils'
import useForm from '../hooks/useForm'
import { actionAuth } from '../store'
import { authLogin } from '../store/actions/index';


interface initialForm {
  email: string,
  password: string
}

const initialStateForm:initialForm = {
  email: '',
  password: ''
}

const AuthView = () => {

  const dispatch = useDispatch()
  const { authLogin } = bindActionCreators(actionAuth, dispatch)

  const { formValues, handleInputChange } = useForm(initialStateForm)
  const { email, password } = formValues

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!utils.regexEmail(email) && !utils.regexPassword(password)) return

    dispatch(authLogin({ email, isAuthenticated: true }))

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
          <button type='submit'>Login</button>
        </div>
      </div>
    </form> 
  </>

  )
}

export default AuthView