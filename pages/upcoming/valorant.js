import React from 'react';
import Moment from 'react-moment';
import Link from 'next/link';

function Valorant( {valres}) {
    
    return (
        <div className='container is-fluid'>
              <div className="columns is-multiline">
        {valres.map(q => (
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
      </div>
        </div>
    )
}


export default Valorant;