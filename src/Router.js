
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import Product from './components/Product'
import Error from './components/Error'



function Router() {
  return (
   <BrowserRouter>
     
         <Link to='/navBar'> {<NavBar/>} </Link>
         <Link to='/'> {<Product/>} </Link>
         
   
   <Routes>
    <Route exact path='/' element={<Product/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router