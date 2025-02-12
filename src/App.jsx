// src/App.jsx
import React, { useEffect,useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import authService from './appwrite/auth';

import HomePage from './components/Homepage/HomePage';
import {login, logout} from "./store/authSlice"
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

//auth 

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])



  return !loading ? (
    <div className="App">
      <Outlet />
    </div>
  ) : (
    <h1 className="flex justify-center items-center min-h-screen text-4xl">
      Loading...
    </h1>
  );

}

export default App;
