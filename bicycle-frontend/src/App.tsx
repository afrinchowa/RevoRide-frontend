import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { lazy,Suspense } from 'react';
import Loader from "./components/loader";

const Home = lazy(()=> import("./pages/home"));
const Search = lazy(()=> import("./pages/search"));
const Cart = lazy(()=> import("./pages/cart"));

const App = () => {
  return (
    <Router>
     <Suspense fallback={<Loader/>}>
     <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/search" element={<Search></Search>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
     </Suspense>
    </Router>
  )
}

export default App