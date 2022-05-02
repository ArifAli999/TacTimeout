import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';
import Fallback from '../../comps/Fallback';
function LiveFifa({ valres }) {

    return (
        <div className='container is-fluid'>
            <div className="columns is-multiline">

                {valres.length ? (
                    <>
                        {valres.map(q => (
                            <div className="column is-half" key={q.id}>
                                <div className='scorebox columns is-multiline'>
                                    <div className='first column is-full'>
                                        {q.opponents.slice(0, -1).map(({ opponent }) => (
                                              <>
                                              
                                              {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                                              <><div key={opponent.id} className={opponent.acronym}>

                                                <Link href={'/live/' + q.slug} key={q.slug}>


                                                    <a className="h2link" key={q.slug}>
                                                        {opponent.name}
                                                    </a>
                                                </Link>

                                            </div><span className='score-live is-pulled-right'>
                                                    {q.results.find((result) => result.team_id === opponent.id).score}
                                                </span></></>

                                        ))}
                                    </div>
                                    <div className='second column is-full'>
                                    {q.opponents.slice(-1).map(({ opponent }) => (
                                         <><div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div><><span key={opponent.id} className={opponent.acronym}>

                                            <Link href={'/live/' + q.slug} key={q.slug}>
                                                <a className="h2link" key={q.slug}>
                                                    {opponent.name}
                                                </a>
                                            </Link>

                                        </span><span className='score-live is-pulled-right'>
                                                {q.results.find((result) => result.team_id === opponent.id).score}
                                            </span></></>

                                        ))}
                                    </div>

                                   


                                </div>
                             
                            </div>
                        ))}
                    </>) : (

                    <Fallback title={'Fifa'} />


                )}

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    const valresult = await fetch(`https://api.pandascore.co/matches/running?filter[videogame]=fifa&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const valdata = await valresult.json();


    return {
        props: { valres: valdata },

    };

}


export default LiveFifa;