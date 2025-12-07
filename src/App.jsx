import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import GlobalLoader from './components/Common/GlobarLoader';
import Routing from './utils/Routing';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
   
        <Routing />
    
    </>
  )
}

export default App