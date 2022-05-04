import { SWRConfig} from "swr"
import useSWRInfinite from 'swr/infinite'
import { mutate } from "swr"
import useSWR from "swr"
import { useState } from 'react'
import axios from "axios";


  function App () {  
    const { data, size, setSize, mutate } = useSWRInfinite(
        (index) => `http://localhost:3000/api/tournaments/${index+1}`,
        (url) => fetch(url).then((r) => r.json()),
        { 
          initialSize: 1, 

        }
      )
          console.log(size)
    if (!data) return <p>loading</p>
  
    // We can now calculate the number of all users
    let totalUsers = 0
    for (let i = 0; i < data.length; i++) {
      totalUsers += 10
    }
  
    return <div>
     
      {data.map((users, index) => {
        // `data` is an array of each page's API response.
        
        return users.map(user => <div key={user.id}>{user.name} - {user.prizepool}</div>)
      })}
      <button onClick={() => setSize(size + 1)}>Load More</button>
      <button onClick={() => mutate()}>Refresh</button>
      {size >1 ? (<button onClick={() => setSize(size-1)}>Show Less</button>): null}
    </div>
  }
export default App