import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav_Bar from './components/Nav_Bar'
import Home from './components/Home'
import Paste from './components/Paste'
import Veiw_paste from './components/Veiw_paste'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Nav_Bar/>
        <Home/>
      </div>
    },
    {
      path: '/paste',
      element:
      <div>
         <Nav_Bar/>
        <Paste/>
      </div>
    },
    {
      path: '/paste/:id',
      element:
      <div>
        <Nav_Bar/>
        <Veiw_paste/>
      </div>
    },
  ]
);


function App() {  

  return (
    <div>
      <RouterProvider router={router}/>    
    </div>
  )
}

export default App
