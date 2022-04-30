import Head from "next/head";
import Moment from "react-moment";
import Link from "next/link";

export default function Home({ csres }) {
  return (
    <div>
      <Head>
        <title>Tac Timeout</title>

      </Head>

      <div className="tourBox columns is-multiline is-mobile">
        <h2 className="tourhead">Tournaments</h2>
      {csres.map((tour) => (

        <>
          
          
           
          {tour.prizepool && tour.prizepool.length> 0 ?    (<div className="column is-full tourInfo">
           <div className="tour-name">
              <Link href = {'/tournaments/' + tour.slug}  key={tour.slug}>
                <p className="tourtitle">{tour.name}</p>
                </Link>
             <span className="prize">{tour.prizepool.slice(0,6)}</span><br/>
           

               
              <span className="timeiconn" key={tour.id}>
               <Moment format="DD MMM">{tour.begin_at}</Moment>
               {tour.end_at && (
              <> - <Moment format="DD MMM">{tour.end_at}</Moment></>
            )}
            </span>
            </div>
            </div>): ''}
          

            <p> {console.log(tour)}</p>

            
      
        </>
      ))}

</div>
    </div>
  )
}


export async function getServerSideProps() {

  const result = await fetch(`https://api.pandascore.co/tournaments/?&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


  const data = await result.json();


  return {
    props: { csres: data },

  };

}


