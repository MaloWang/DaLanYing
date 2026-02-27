import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Profile from './pages/Profile'
import Help from './pages/Help'
import Detail from './pages/Detail'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
