import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch(`https://api.pandascore.co/matches/upcoming??sort=&page=1&per_page=10&&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
    const data = await res.json();
    

    return {
        props: {
         game: data
        }
    }
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
                  </Link></div>
                  </div>
                  </div>
                ))}
                </div>
            </div>
     
   
    );
}

export default upcomingGames;