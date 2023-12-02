
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import StoresList from "./components/StoresList"
import StoreForm from "./components/StoreForm"
import StoreDetails from "./components/StoreDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<StoresList/>} default />
          <Route path="/stores/new" element={<StoreForm/>} />
          <Route path="/stores/:id" element={<StoreDetails/>} />
          <Route path="/stores/edit/:id" element={<StoreForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
