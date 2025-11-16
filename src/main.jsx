import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { route } from './route.jsx'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 100,
  easing: 'ease-in-out',
})

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
)
