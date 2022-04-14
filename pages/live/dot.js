import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function DotLive({ dotres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {dotres.length ? (
                    <>
                        {dotres.map(q => (
                            <div className="column is-half" key={q.slug}>
                                <div className="inner">
                                    <div className="inner__box">
                                        <Link href={'/live/' + q.slug} key={q.slug}>
                                            <a className="h2link" key={q.name}>
                                                {q.name}
                                            </a>
                                        </Link>

                                        <span className="is-pulled-right tag is-danger">
                                            <Moment fromNow>{q.scheduled_at}</Moment>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>) : (<p>Sorry, No Live Dota Games Right.</p>)}

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    const dotaresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=dota-2&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await dotaresult.json();


    return {
        props: { dotres: data },
  
    };

}


export default DotLive;