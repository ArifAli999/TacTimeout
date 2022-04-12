import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';
import styles from './Lol.module.css'

function Lol( {lolres = []}) {
   
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






export default Lol;