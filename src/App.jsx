import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Student from './components/Student';
import Order from './components/Order';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}  >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='student' element={<Student />} />
          <Route path='order' element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App