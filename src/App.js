import React from 'react'
import Search from './Component/Search'
import Pagination from './Component/Pagination'
import Stories from './Component/Stories'
// import { useContext } from 'react'
// import { AppContext } from './Component/Context'
//import { useGlobalContext } from './Component/Context'
import './App.css'

const App = () => {

  // const datas=useContext(AppContext);
  //  const datas=useGlobalContext();

// console.log(datas);
  return (
    <>
    <div>
    {/* Welocme to Vipin news website {datas} */}
    </div>
    
    
     <Search/>
     <Pagination/>
     <Stories/>
    
    </>
  )
}

export default App
