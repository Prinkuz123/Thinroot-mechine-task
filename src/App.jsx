import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Header from './Components/header'
import Loginpage from './pages/loginpage'
import { useState } from 'react'
import { products } from './Productdetails/productdetails'
import { myContext } from './Context/context'
import ViewComponent from './pages/ViewComponent'
function App() {

  const [details,setDetails]=useState(products)
  const[cart,setCart]=useState([])

const contextVlaues={details,setDetails,cart,setCart}

  return (

    <>
    

<myContext.Provider value={contextVlaues}>
<Header/>
<Routes>
<Route  path="/" element={<Homepage/>}/>
<Route  path="/login" element={<Loginpage/>}/>
<Route path='/view/:id'   element={<ViewComponent/>}/>

</Routes></myContext.Provider>

  
    
    </>
  )
}

export default App
