import Link from "next/link";
import Moment from 'react-moment';


// remember to check getStatic vs getServerSide
export async function getStaticProps({ res }) {
    try {
        const result = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=30&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
        const data = await result.json();

        return {
            props: { game: data },
           
            
           
            
        };
    } catch (error) {
        res.statusCode = 404;
        return { props: {} };
    }
}



const UpcomingGames = ({ game }) => {
  
    return (

            <div className="container">
                <h2>Live Games  - </h2>
                <div className="columns is-multiline">
                {game.map(q => (
                    <div className="column is-half" key={q.id}>
                        <div className="inner">
                        <div className="inner__box">
                     <Link href = {'/live/' + q.slug}  key={q.slug}>
                       <a className="h2link" key={q.slug}> {q.name}</a>
                  </Link>
                  <span className="is-pulled-right tag is-danger">
                                 LIVE
                    </span>
                  </div>
                  </div>
                  </div>
                ))}
                </div>
            </div>
     
   
    );
}

export default UpcomingGames;