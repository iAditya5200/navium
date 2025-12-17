import React from 'react'

import Routing from './utils/Routing';
import Whatsapp from './components/Common/Whatsapp';
import ScrollToTop from './utils/ScrollToTop';



function App() {
  
  return (
    <>
    <ScrollToTop/>
   <Whatsapp/>
        <Routing />
    
    </>
  )
}

export default App