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
                    </>) : (<p>Sorry, No Live Fifa Games Right.</p>)}

            </div>
        </div>
    )
}

export async function getStaticProps() {

    const fifaresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=fifa&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await fifaresult.json();


    return {
        props: { fifares: data },
        revalidate: 10
    };

}


export default FifaLive;