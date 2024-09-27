import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
