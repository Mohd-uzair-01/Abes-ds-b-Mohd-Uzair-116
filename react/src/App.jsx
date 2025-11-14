import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home(){
    return <h1>The is my home page</h1>
}
function About(){
    return <h1>The is my about page</h1>
}

function Link1() {
  return (
    <div>
        <nav>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default Link1