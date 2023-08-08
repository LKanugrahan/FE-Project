import { useEffect, useState } from 'react'
import {Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import SearchMenu from './pages/SearchMenu'
import AddMenu from './pages/AddMenu'
import DetailMenu from './pages/DetailMenu'
import ProfileMenu from './pages/ProfileMenu'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/search" replace={true}/>}/>
      <Route path='/search' element={<SearchMenu/>}/>
      <Route path='/add-menu' element={<AddMenu/>}/>
      <Route path='/detail' element={<DetailMenu/>}/>
      <Route path='/profile-menu' element={<ProfileMenu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
