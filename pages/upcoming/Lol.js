import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';
import styles from './Lol.module.css'

function Lol( {lolres}) {
   
    return (
        <div className='container is-fluid'>
              <div className="columns is-multiline">
        {lolres.map(q => (
          <div className="column is-half" key={q.id}>
            <div className={styles.inner} >
          
              <div className={styles.lolbox}>
            
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
      </div>
        </div>
    )
}

export async function getStaticProps() {

   
  const lol = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=league-of-legends&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
  const loldata = await lol.json();

  return {
      props: {lolres: loldata },
  };

}




export default Lol;