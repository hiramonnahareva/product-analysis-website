import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import Dashbord from './Component/Dashbord/Dashbord';
import Reviews from './Component/Reviews/Reviews';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/dashbord' element={<Dashbord/>}/>
       <Route path='/reviews' element={<Reviews/>}/>
       <Route path='/blogs' element={<Blogs/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
