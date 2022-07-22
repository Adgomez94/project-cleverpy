import React from 'react'
import AuthView from './modules/auth/view/AuthView'
import PostView from './modules/post/views/PostView'

const App = () => {
  return (
    <>
      <div className="container">
        {/* <PostView /> */}
        <AuthView />
      </div>
    </>
  )
}

export default App
