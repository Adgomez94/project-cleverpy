import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthView from './modules/auth/view/AuthView'
import PostView from './modules/post/views/PostView'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='auth' element={
                <PublicRoute>
                  <AuthView />
                </PublicRoute>
              } />
            <Route path='/' element={
                <PrivateRoute>
                  <PostView />
                </PrivateRoute>
              } />
            <Route path='/*' element={<Navigate replace to="/auth" />} />
          </Routes>
        </BrowserRouter>   
      </div>
    </>
  )
}

export default App
