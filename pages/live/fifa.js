import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function FifaLive({ fifares }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {fifares.length ? (
                    <>
                        {fifares.map(q => (
                            <div className="column is-half" key={q.id}>
                                <div className="inner">
                                    <div className="inner__box">
                                        <Link href={'/live/' + q.slug} key={q.slug}>
                                            <a className="h2link" key={q.slug}>
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
                    </>) : (
                    
                    <div className='container is-fluid'>
                    <div className='error-box'>
                        <div class="notification is-danger">
                            
                            Sorry there are currently no <strong>LIVE FIFA</strong> games right now <br/><br/>
                            For a full list of live games right now please follow this link <strong>
                            <Link href={'/live/'}>
                                <a>Live</a>
                            </Link>
                            </strong>
                        </div>

                    </div>
                </div>


                    )}

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    const fifaresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=fifa&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await fifaresult.json();


    return {
        props: { fifares: data },
        
    };

}


export default FifaLive;