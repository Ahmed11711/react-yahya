import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/User/UsersPage'
 
import UsersPage from './pages/User/UsersPage'
import UserFormPage from './pages/User/UserForm'

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/users">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/create" element={<UserFormPage mode="create" />} />
        <Route path="/users/edit/:id" element={<UserFormPage mode="edit" />} />

        
      </Routes>
    </div>
  )
}

export default App
