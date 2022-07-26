import React, { EventHandler, MouseEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionAuth } from '../../modules/auth/store';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { authLogout } = bindActionCreators(actionAuth, dispatch)

  const handleLogout = () => {
    dispatch(authLogout())
    navigate("/auth")
  }

  return (
    <header>
        <h1>Proyecto Cleverpy</h1>
        <div>
          <button className="btn btn-red" onClick={handleLogout}>Logout</button>
        </div>
    </header>
  )
}

export default Header