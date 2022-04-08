import Link from "next/link";
import Moment from 'react-moment';



export async function getStaticProps ({ res }) {
 
        const result = await fetch(`https://api.pandascore.co/matches/upcoming??sort=&page=1&per_page=10&&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
        const data = await result.json();

        return {
            props: { game: data },
            revalidate: 10, // In seconds

        
        };
  
}


const upcomingGames = ({ game }) => {



    return (

        

            <div className="container">
        
               
                <h2>Upcoming Games  - </h2>
                <div className="columns is-multiline">
                {game.map(q => (
                    <div className="column is-half" key={q.id}>
                        <div className="inner">
                        <div className="inner__box">
                     <Link href = {'/upcoming/' + q.slug}  key={q.slug}>
                       <a className="h2link" key={q.slug}> {q.name}</a>
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
     
   
    );
}

export default upcomingGames;