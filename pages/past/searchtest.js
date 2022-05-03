import React from 'react'
import { useState,useEffect } from 'react'

function searchtest() {
    const [openModal, setOpenModal] = useState(false);

 function toggleMenu() {
     setOpenModal(!openModal)
 }

   return (
    <div>
        <button className='toggle-modal' onClick={()=> toggleMenu()}>
            hii
        </button>

     {openModal ? ("Modal cont"): null}
    
    </div>
  )
}

export default searchtest