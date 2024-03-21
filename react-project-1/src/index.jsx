import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import routes from './routes.jsx'

const router = createBrowseRrouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)
