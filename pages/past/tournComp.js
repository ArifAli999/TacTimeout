import { SWRConfig} from "swr"
import useSWRInfinite from 'swr/infinite'
import { mutate } from "swr"
import useSWR from "swr"
import { useState } from 'react'
import axios from "axios";
import Link from 'next/link'
import Moment from 'react-moment'
import { FaRandom } from 'react-icons/fa'
// compoennt for the home page. 

  function SearchTest () {  
    const { data, size, setSize, mutate } = useSWRInfinite(
        (index) => `../../api/tournaments/${index+1}`,
        (url) => fetch(url).then((r) => r.json()),
        { 
          initialSize: 1, 

        }
      )
        
    if (!data) return <p>loading</p>
  
    // We can now calculate the number of all users
    let totalUsers = 0
    for (let i = 0; i < data.length; i++) {
      totalUsers += 10
    }
  
    return <div className="tourboxed">
<div className="tourhead-cont">
        <h2 className="tourhead">Tournaments </h2>
        <span onClick={() => mutate()} className="refreshbtnnspan"><button  onClick={() => mutate()} className="refreshbtn"> <FaRandom/></button></span></div>
        

      {data.map((users, index) => {
        // `data` is an array of each page's API response.
       
        return users.map((user) => 
        (
          <div className="column is-full tourInfo" key={user.id}>

        <div className="tour-name" key={user.id}>
           <Link href = {'/tournaments/' + user.slug}  key={user.slug}>
             <p className="tourtitle">{user.name}</p>
             </Link>
          <span className="prize">{user.prizepool.slice(0,6)}</span><br/>
        
 
            
           <span className="timeiconn" key={user.id}>
            <Moment format="DD MMM">{user.begin_at}</Moment>
            {user.end_at && (
           <> - <Moment format="DD MMM">{user.end_at}</Moment></>
         )}
         </span>
         </div>
         </div>
         ))
      })}
      <div className="button-cont">
      <button onClick={() => setSize(size + 1)} className="loadMore">Load More</button>
      {size >1 ? (<button onClick={() => setSize(size-1)} className="lessbtn">Show Less</button>): null}
      </div>
    </div>
  }
export default SearchTest