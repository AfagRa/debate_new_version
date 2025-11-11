import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      
      <main>
        <Outlet />
      </main>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App