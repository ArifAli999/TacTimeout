import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Router from 'next/router';




export const getStaticPaths = async () => {
  const res = await fetch(`https://api.pandascore.co/tournaments/?sort=&page=1&per_page=5&token=${process.env.TOKEN}`);
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
  const res = await fetch(`https://api.pandascore.co/tournaments/${slug}?&token=${process.env.TOKEN}`);
  const teams = await fetch(`https://api.pandascore.co/tournaments/${slug}/teams?&token=${process.env.TOKEN}`)
  const data2 = await teams.json();
  const data = await res.json();


  return {
    props: {
      game: data,
      teams: data2,
      slug

    }
  }

}
export default function Tournaments({ game, teams,slug }) {



  return (
    <>
  
    <div className='container is-fluid'>
      <div className='nambar'>


        <div className='info-column-box'>
          <div className="squarebox">
            <img className="tour-img" src={game.league.image_url}></img>
          </div>
          <div className='namfullbox'>
            <p className='namefull'> {game.name} - <span className='data-league'>{game.full_name}</span>

            </p>
            <span className='sub'>{game.league.name}</span>
          </div>

        </div>
        <div className='columns'>
          <div className='column tourInfoBox'>
            <div className='tourInfoBox'>
              <div className='touri_name'>Tournament Info :</div>
              <div className='tournybox'>

                <p className='alt tour'>Prizepool : <span className='main tour'>{game.prizepool}</span></p>


                <p className='alt tour'>Videogamme :  <span className='main tour'>{game.videogame.name}</span></p>


                <p className='alt tour'>Tier :  <span className='main tour'>{game.tier.toUpperCase()}</span></p>



              </div>
            </div>
          </div>




          {teams.length > 0 ? (
            <div className='column tourInfoBox'>
              <div className=''>
                <h2 className='team_name'>Teams:</h2>

                {teams.map((team) => (

                  <div className='tournybox' key={team.id}>
                    <div className='imgbox'>
                      <img src={team.image_url} className="tiny img rounded"></img>

                      <p className='teamNames' key={team.slug}>
                        {team.name}



                      </p>



                    </div>
                  </div>
                ))}


              </div>
            </div>
          ) : null}




        </div>
      </div>
    </div>
    </>
  )
}
