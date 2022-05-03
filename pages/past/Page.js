import {useState} from 'react'
import useSWR from 'swr';
import axios from 'axios';

function Page ({ index }) {
    const { data, error } = useSWR(
        `http://localhost:3000/api/tournaments/${pageIndex}`,
        fetcher
      );
  
    // ... handle loading and error states
    if (error) return <div><p className='white-text'>Something went wrong...{console.log(error)}</p></div>
  if (!data) return <div><p className='white-text'>Please hang on</p></div>
  
    return data.map(item => <div key={item.id}>{item.name}</div>)
  }
  

  export default Page