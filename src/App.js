import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'
import { Alert } from './components/layout/Alert'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { GithubProvider } from './context/github/GitHubContext'
import { AlertProvider } from './context/alert/AlertContext'
import { User } from './pages/User'

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between min-h-screen bg-slate-700 text-neutral-content">
            <NavBar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}
