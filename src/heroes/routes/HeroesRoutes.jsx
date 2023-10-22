import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="marvel" element={ <MarvelPage/> }/> {/* 👈 Renders at /app/ */}
          <Route path="dc" element={<DcPage/>}/>
          <Route path="/" element={<Navigate to={'/marvel'}/>}/>
          <Route path="/search" element={<SearchPage to={'/marvel'}/>}/>
          <Route path="/hero/:heroid" element={<HeroPage to={'/marvel'}/>}/>

        </Routes> 

    </>
  )
}
