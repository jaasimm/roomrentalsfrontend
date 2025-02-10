
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Brokerpage from './Components/Brokerpage'
import Userpage from './Components/Userpage'
import RoomCard from './Components/RoomCard'
import Auth from './Pages/Auth'
import AuthBroker from './Pages/AuthBroker'
import Wishlist from './Pages/BrDashboard'
import ContactUs from './Pages/contactus'
import ReprtaPrblm from './Pages/ReprtaPrblm'
import Aboutus from './Pages/Aboutus'
import Admin from './Pages/Admin'
import BrDashboard from './Pages/BrDashboard'
import AdminDash from './Components/AdminDash'
import Adminroomcard from './Components/Adminroomcard'
import { useContext, useEffect } from 'react'
import { AuthContextResponse } from './ContextAPI/AuthContext'



function App() {
  
      
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/broker' element={<Brokerpage/>}/>
      <Route path='/user' element={<Userpage/>}/>
      <Route path='/user/roomcard' element={ <RoomCard/>}/>
      <Route path='/user/login' element={<Auth/>}/>
      <Route path='/broker/login' element={<AuthBroker/>}/>
      <Route path='/user/register' element={<Auth register/>}/>
      <Route path='/broker/register' element={<AuthBroker register/>}/>
      <Route path='/broker/save' element={<BrDashboard/>}/>
      
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/reportaproblem' element={<ReprtaPrblm/>}/>
  
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admindash8606913632' element={<AdminDash/>}/>
      <Route path='/adminroomcard' element={<Adminroomcard/>}/>



    </Routes>
    
    <Footer/>
  
    
    
     
    </>
  )
}

export default App
