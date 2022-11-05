import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    // <div>
    //   <NavBar />
    // </div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<About/>} path='/about' />
          <Route element={<Resume/>} path='/resume' />
          <Route element={<Contact/>} path='/contact' />
          {/* <Route component={NotFound} status={404} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
