import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Signup from './Components/SignUp/SignUp';
import {UserSessionData} from './Components/Context/AuthContext';
function App() {  
  const [user, setUser] = useState(null)
  return (
      <UserSessionData.Provider value={{user,setUser}}>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/signup' Component={Signup}></Route>
          <Route path='/login' Component={Login}></Route>
        </Routes>
        <Footer></Footer>
        </UserSessionData.Provider>
  );
}

export default App;
