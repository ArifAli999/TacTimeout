import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function Valorant({ valres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {valres.length ? (
                    <>
                        {valres.map(q => (
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
                    </>) : (<p>Sorry, No Live Valorant Games Right.</p>)}

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    const valresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=valorant&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const valdata = await valresult.json();


    return {
        props: { valres: valdata }
    };

}


export default Valorant;