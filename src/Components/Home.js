import React, { useContext, useState } from 'react'
import Header from './Header/Header'
import { UserSessionData } from './Context/AuthContext'

function Home() {
  const {user,setUser} = useContext(UserSessionData)
  //Make sure as auth state changed, user is now assigned to currentUser
  return (
    <Header></Header>
   
  )
}

export default Home
