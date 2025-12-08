import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import GlobalLoader from './components/Common/GlobarLoader';
import Routing from './utils/Routing';
import Whatsapp from './components/Common/Whatsapp';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
   <Whatsapp/>
        <Routing />
    
    </>
  )
}

export default App