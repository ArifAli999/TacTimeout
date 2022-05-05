import React from 'react'
import { useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';

const fetcher = (url) => axios.get(url).then((res) => res.data);
var item = '';
var sug = '';
function FavGames(item) {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    item = JSON.parse(localStorage.getItem("Slug"));

    sug = item ? item.join('/') : console.log('no')


    console.log(sug)


  }

  const { data, error } = useSWR(
    `api/matches/${sug}/`,
    fetcher
  );


  if (error) return <div>You have no favorites.</div>
  if (!data) return <div>Your favorites coming up..</div>
  const mappedData = data.flatMap((d) => d)

  

 

  // display items.
  return (

    <div className='fav-gamescont'>

      {mappedData.length > 0 ? (<h2 className='white-bold'>Your Favourites.</h2>) : (<h2 className='white-bold'>You have no favorites.</h2>)}

      <div className="scorebox columns is-multiline">
        {mappedData.map((q) => (



          <div className='favtboxes column is-full' key={q.id}>
            <Link href={'/live/' + q.slug} key={q.slug}>
              <a className="h2link" key={q.slug}>
                {q.name}
              </a>
            </Link>
            {/**<div className='removeBtn is-pulled-right'><button className='deletefvt' onClick={() => deleteItem(q.slug)}>delete</button></div>**/}
          </div>










        ))}

      </div>
    </div>

  )



}

export default FavGames