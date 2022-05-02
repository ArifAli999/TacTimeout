import useSWR from 'swr'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Moment from 'react-moment';

// example of SWR fetching - that could be used but wasn't used due to API restrictions.
// SWR is a React Hooks library for data fetching.
//SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.


const fetcher = (url) => axios.get(url).then((res) => res.data);


const SWRTest = () => {
 
  const { data, error } = useSWR(
    `api/upcoming-cs`,
    fetcher
  );



  if (error) return <div><p className='white-text'>Something went wrong...</p></div>
  if (!data) return <div><p className='white-text'>Please hang on</p></div>

  return (
    <div>
      <Head>
        <title>Tac Timeout</title>

      </Head>
    <div className="tourBox columns is-multiline is-mobile">
    <h2 className="tourhead">Hottest Tournaments</h2>
  {data.map((tour) => (

    <>
      
      
       
     <div className="column is-full tourInfo">
       <div className="tour-name">
          <Link href = {'/tournaments/' + tour.slug}  key={tour.slug}>
            <p className="tourtitle">{tour.name}</p>
            </Link>
         <span className="prize">{tour.prizepool}</span><br/>
       

           
          <span className="timeiconn" key={tour.id}>
           <Moment format="DD MMM">{tour.begin_at}</Moment>
           {tour.end_at && (
          <> - <Moment format="DD MMM">{tour.end_at}</Moment></>
        )}
        </span>
        </div>
        </div>
      

        <p> {console.log(tour)}</p>

        
  
    </>
  ))}

</div>
</div>
  )
}

export default SWRTest