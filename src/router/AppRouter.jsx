import {  Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth"
import { HeroesRoutes } from "../heroes"




const AppRouter = () => {
  return (
    <>
       
        <Routes>
         
         <Route path="login" element={<LoginPages/>}/>{/* 👈 Renders at /app/ */}
         <Route path="/*" element={<HeroesRoutes/>}/>
          
        </Routes>
     
    
    
    </>
  )
}

export default AppRouter