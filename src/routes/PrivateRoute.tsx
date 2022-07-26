import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'

interface Props {
  children: JSX.Element
}

const PrivateRoute = ({children}:Props) => {

  const { isAuthenticated } = useSelector((state:RootState) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if( !isAuthenticated ) return navigate('/auth') 
  }, [])
  

  return children
}

export default PrivateRoute