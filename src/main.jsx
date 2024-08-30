import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Welcome from "./routes/welcome/Welcome.jsx"
import Login from './routes/login/Login.jsx'
import Signup from './routes/signup/Signup.jsx'
import Home from './routes/home/Home.jsx'
import { Provider } from "react-redux"
import Store from '../store/Store.js'
import ProtectedRoute from './routes/protected route/ProtectedRoute.jsx'
import Chat from './routes/home/Chat window/Chat.jsx'
import ProfilePage from './routes/home/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Welcome />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<Signup />
  },
  {
    path:"/home",
    element: <ProtectedRoute>
      <Home />
    </ProtectedRoute>,
    children: [
      {
        path:"profile",
        element: <ProfilePage />
      },
      {
        path:"chat",
        element:<Chat />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
