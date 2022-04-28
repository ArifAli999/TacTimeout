import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';
import useSWR from 'swr'
import {useEffect} from 'react'

// data fetching on this page is done by using API routes & useSWR hook library. 


const fetcher = (url) => fetch(url).then((res) => res.json())
const FETCH_URL = 'http://localhost:3000/api/upcoming-cs'


function CSCounter(props) {
    const { data, error } = useSWR(FETCH_URL, fetcher)
  
  

    if (error) return <div>Something went wrong...</div>
    if (!data) return <div>Loading...</div>
  

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {data.length ? (
                    <>
                        {data.map(q => (
                            <div className="column is-half" key={q.id}>
                                <div className="inner">
                                    <div className="inner__box">
                                        <Link href={'/upcoming/' + q.slug} key={q.slug} data-cy="id">
                                            <a className="h2link" key={q.slug}>
                                                {q.name}.id
                                            </a>
                                        </Link>

                                        <span className="is-pulled-right tag is-danger">
                                            <Moment fromNow>{q.scheduled_at}</Moment>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>) : (<p>Sorry, No Upcoming CS:GO Games Right Now</p>)}

            </div>
        </div>
    )
}

{/*export async function getServerSideProps() {

    const dotaresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await dotaresult.json();


    return {
        props: { data: data }
      
    };

}*/}


export default CSCounter;