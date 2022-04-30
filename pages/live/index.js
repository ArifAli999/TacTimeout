import Link from "next/link";
import Moment from 'react-moment';
import { useState } from "react";
import { useRouter } from "next/router";


// remember to check getStatic vs getServerSide
export async function getServerSideProps(context) {
  

       


        const { query } = context;
        // since query is an obj, you can add properties withoud defining as let keyword above
        if (!query.page) {
           query.page = "1";
        
        }

        const result = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=5&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
        const data = await result.json();
      
        return {
            props: { game: data },          
            
        };
    
    
}



const UpcomingGames = ({ game }) => {
console.log(game)
    const router = useRouter();
    const [pageNumber, setPageNumber] = useState(1)


 
  
    return (
     
  
    <div className="container">
            <h2>Live Games  - </h2>
            
            <div className="columns is-multiline">
                
                {game.map(q => (
                    <div className="column is-half" key={q.id}>
                        <div className="inner">
                            <div className="inner__box">
                                <Link href={'/live/' + q.slug} key={q.slug}>
                                    <a className="h2link" key={q.slug} data-cy="id"> {q.name}</a>
                                </Link>
                                {/*
            {q.opponents.map(({opponent}) => (

<span key={opponent.id} className={opponent.acronym}>

{opponent.name}


({q.results.find((result) => result.team_id === opponent.id).score})


</span>

            ))}*/}
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