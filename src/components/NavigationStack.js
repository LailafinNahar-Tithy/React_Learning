import { Routes,Route,Navigate } from 'react-router-dom'
import React from 'react'
import FirstPage from './FirstPage'
import HomePage from './HomePage'

export default function NavigationStack() {
  return (
    <div>
      <Routes>
        <Route path='/Index' element={<FirstPage/>} />
        <Route path='/Home' element={<HomePage/>} />
        <Route path='*' element={<Navigate to="Index"/>} />
      </Routes>
    </div>
  )
}
