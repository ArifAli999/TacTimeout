import Image from 'next/image';


export const getStaticPaths = async () => {
  const res = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
  const data = await res.json();

  const paths = data.map(o => {
    return {
      params: { slug: o.slug.toString() }
    }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`https://api.pandascore.co/matches/running?search[slug]=${slug}&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
  const players = await fetch(`https://api.pandascore.co/matches/${slug}/opponents?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
  const data = await res.json();
  const data2 = await players.json();
  console.log(data2)

  return {
    props: {
      game: data,
      plays: data2

    }
  }
}



export default function live({ game, plays }) {

  return (
    <div className="container">
 
      <h2> Single Game deets.</h2>
      {game.map((g) => (
        <div className="container" key={g.id}>


          <div className="inner-box">
            {/** Fetch team and display their corresponding score - */}
            <div className="score-board-min columns is-mobile is-multiline">
              <div className="column is-full"> {g.opponents.slice(0, -1).map((o) => <span className="team" key={o.opponent.name}><img src={o.opponent.image_url} width="30" height="30" className='team-img'></img>{o.opponent.name}</span>)}
                {g.results.slice(0, -1).map((res, i) => (
                  <span className="scores" key={res.id}>{res.score}</span>
                ))}</div>

              <div className="column">
                {g.opponents.slice(-1).map((o) => <span className="team" key={o.opponent.name}>{o.opponent.name}</span>)}
                {g.results.slice(-1).map((res, i) => (
                  <span className="scores" key={res.id}><div>{res.score}</div></span>
                ))}

              </div>
            </div>
            <br />

            <div className="lower-box columns is-multine">

              <div className="column is-half">

                <div className="dark"><span className="is-pulled-left">League</span>  <span className="is-pulled-right">{g.league && g.league.name}</span></div>
                <div className="dark"><span className="is-pulled-left">Game:</span>  <span className="is-pulled-right">  {g.videogame && g.videogame.name} </span></div>
                <div className="dark alt"><span className="is-pulled-left">Tournament</span>  <span className="is-pulled-right"> {g.tournament && g.tournament.name} | </span></div>
                <div className="dark"><span className="is-pulled-left">Series</span>  <span className="is-pulled-right"> {g.serie.full_name} | {g.serie.tier.toUpperCase()} </span></div>
                <div className="dark alt"><span className="is-pulled-left">Teams</span>  <span className="is-pulled-right">   {g.opponents.map((o) => o.opponent.name).join(" vs ")}  </span></div>


              </div>

          




            </div>




            <br />
          </div>


        </div>
      ))}

<div className='column is-half'>




</div>


    </div>
  )
}