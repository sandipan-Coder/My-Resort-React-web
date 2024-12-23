import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Houses from './Components/Houses/Houses.jsx';
import Listing from './Components/Listing/Listing.jsx';
import Usercontext from './Context/Usercontext.jsx';
import Contact from './Components/Contactus/Contact.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Houses' element={<Houses/>}/>
    <Route path='Listing' element={<Listing/>}/>
    <Route path='Contact' element={<Contact/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
      <RouterProvider router={router}/>
    </Usercontext>
  </StrictMode>,
)
