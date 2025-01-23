import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import MainLayout from './layouts/MainLayout'
import Details from './pages/Details'
import NotFound from './pages/NotFound'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element= {<Home/>}/>
        <Route path='/add' element = {<Add/>}/>
        <Route path='/details/:id' element = {<Details/>}/>

        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
