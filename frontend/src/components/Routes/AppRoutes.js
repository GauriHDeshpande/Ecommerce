import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/landingPage';
import Auth from '../../pages/Auth/Auth';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/login' element={<Auth/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
