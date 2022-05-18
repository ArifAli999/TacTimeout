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
  
    // get the number of items

    let totalUsers = 0
    for (let i = 0; i < data.length; i++) {
      totalUsers += 10
    }
  
    return <div className="tourboxed">
<div className="tourhead-cont">
        <h2 className="tourhead">Tournaments </h2>
        <span onClick={() => mutate()} className="refreshbtnnspan"><button  onClick={() => mutate()} className="refreshbtn"> <FaRandom/></button></span></div>
        

      {data.map((tours, index) => {
        // `data` is an array of each page's API response.
       
        return tours.map((tour) => 
        (
          <div className="column is-full tourInfo" key={tour.id}>

        <div className="tour-name" key={tour.id}>
           <Link href = {'/tournaments/' + tour.slug}  key={tour.slug}>
             <p className="tourtitle">{tour.name}</p>
             </Link>
          <span className="prize">{tour.prizepool.slice(0,6)}</span><br/>
        
 
            
           <span className="timeiconn" key={tour.id}>
            <Moment format="DD MMM">{tour.begin_at}</Moment>
            {tour.end_at && (
           <> - <Moment format="DD MMM">{tour.end_at}</Moment></>
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