import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className={theme == "dark" ? "dark min-h-screen flex flex-col" : "min-h-screen flex flex-col"}>
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