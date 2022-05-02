import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';
import Fallback from '../../comps/Fallback';
function UpcomingFifa({ csres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {csres.length >0  ? (
                    <>
                        {csres.map(q => (
                            <div className="column is-half" key={q.id}>
                                <div className='scorebox columns is-multiline'>
                                    <div className='first column is-full'>
                                    <Link href={'/upcoming/' + q.slug} key={q.slug}>
                                            <a className="h2link" key={q.slug}>
                                                {q.name} 
                                            </a>
                                        </Link>
                                    </div>
                         
                                   


                                </div>
                             
                            </div>
                        ))}
                    </>) : (

                    <Fallback title={'CS:GO'} />


                )}

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    const valresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=fifa&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const valdata = await valresult.json();


    return {
        props: { csres: valdata },

    };

}


export default UpcomingFifa;