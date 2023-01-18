import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-zinc-800 text-neutral-content">
        <NavBar />
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  )
}
