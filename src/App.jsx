import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Servicedetails from './pages/Servicedetails'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service/:id' element={<Servicedetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
