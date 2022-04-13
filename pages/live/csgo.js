import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function CsGo({ csres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {csres.length ? (
                    <>
                        {csres.map(q => (
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
                    </>) : (<p>Sorry, No Live Fifa Games Right.</p>)}

            </div>
        </div>
    )
}

export async function getStaticProps() {

    const csresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await csresult.json();


    return {
        props: { csres: data }
    };

}


export default CsGo;