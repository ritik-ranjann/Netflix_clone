import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Signin from './Signin'
import '../App.css'

const netflix=createBrowserRouter([
  {
    path:'/',
    element: <HomePage></HomePage>
  },
  {
    path:'/signin',
        element: <Signin></Signin>
  }

])
const RouterApp = () => {
  return (
   <RouterProvider router={netflix}></RouterProvider>
  )
}

export default RouterApp