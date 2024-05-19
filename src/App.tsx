import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Openning from './pages/Openning'
import Home from './pages/Home'
import DefaultLayout from './components/layout/DefaultLayout'
import JavaProjects from './pages/JavaProjects'
import Cybersecurity from './pages/Cybersecurity'
import DataBase from './pages/DataBase'
import Linux from './pages/Linux'
import PythonProjects from './pages/PythonProjects'
import Docker from './pages/Docker'
import NodeJS from './pages/NodeJS'
import Windows from './pages/Windows'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Openning/>} />
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/java" element={<JavaProjects/>}/>
          <Route path="/nodejs" element={<NodeJS/>}/>
          <Route path="/windows" element={<Windows/>}/>
          <Route path="/cybersecurity" element={<Cybersecurity/>}/>
          <Route path="/database" element={<DataBase/>}/>
          <Route path="/linux" element={<Linux/>}/>
          <Route path="/python" element={<PythonProjects/>}/>
          <Route path="/docker" element={<Docker/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App