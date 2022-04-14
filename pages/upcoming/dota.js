import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function DotaTwo({ dotres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {dotres.length ? (
                    <>
                        {dotres.map(q => (
                            <div className="column is-half" key={q.id}>
                                <div className="inner">
                                    <div className="inner__box">
                                        <Link href={'/upcoming/' + q.slug} key={q.slug}>
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
                    </>) : (<p>Sorry, No Upcoming Dota-2 Games Right Now</p>)}

            </div>
        </div>
    )
}

export async function getStaticProps() {

    const dotaresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=dota-2&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const data = await dotaresult.json();


    return {
        props: { dotres: data },
        revalidate: 10
    };

}


export default DotaTwo;