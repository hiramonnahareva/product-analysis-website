import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { useEffect, useState } from 'react';
import NotFound from './Component/NotFound/NotFound';
import Dashbord from './Component/Dashbord/Dashbord';

function App() {
  const [reviews, setReviews] = useState ([])
  useEffect (()=>{
      fetch ('data.json')
      .then (res => res.json ())
      .then (data => setReviews(data))
  },[]) ;
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/dashbord' element={<Dashbord/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
