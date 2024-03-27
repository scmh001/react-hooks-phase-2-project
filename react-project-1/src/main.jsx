import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import routes from './routes.jsx'

const router = createBrowserRouter(routes)

//create router using React Router (see routes.jsx for routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
