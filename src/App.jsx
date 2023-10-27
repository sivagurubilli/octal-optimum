import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import ProfilePage from './components/Profile/ProfilePage'
import EditProfilePage from './components/Edit/EditPage'

function App() {


  return (
    <div className="App">
            <Routes>
              <Route path ="/login" element = {<LoginPage/>} />
      <Route path="/" element = {<ProfilePage/>}/>
      <Route path = "/edit" element = {<EditProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App
