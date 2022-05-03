import React from 'react'

function Fallback({title}) {
  return (
    <div className='container is-fluid'>
    <div className='error-box'>
        <div className="notification is-danger">
            
            Sorry there are currently no <strong>LIVE {title}</strong> games right now,
           
          
        </div>

    </div>
</div>
  )
}

export default Fallback