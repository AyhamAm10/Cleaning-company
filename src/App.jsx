import Header from './componant/Header'
import Hiddenlist from './componant/Hiddenlist'
import Footer from './componant/Footer'
import Mainpage from './pages/Mainpage'
import { useEffect, useState } from 'react'
import Foraplicants from './pages/Foraplicants'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'


function App() {

  const [openlist, setopenlist] = useState(false);
  const [myservice, setmyservice] = useState(null)

  const handelopen = () => {
    openlist ?
      setopenlist(false) : setopenlist(true)
  }
  const handelclose = () => {
    openlist ? null : setopenlist(false)
  }


  return (
    <>
      <Header handelclose={handelclose} handelopen={handelopen} />
      {openlist &&
        <Hiddenlist />
      }

      <Routes>
        <Route path="/" exact element={<Mainpage />} />
        <Route path="/services" element={<Services setmyservice={setmyservice} myservice={myservice} />} />
        <Route path="/order" element={<Foraplicants myservice={myservice} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
