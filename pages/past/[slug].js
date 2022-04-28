import Image from 'next/image';
import { useEffect } from 'react';
import Moment from 'react-moment';


export const getStaticPaths = async () => {
  const res = await fetch(`https://api.pandascore.co/matches/past?&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
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
  const res = await fetch(`https://api.pandascore.co/matches/past?search[slug]=${slug}&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
  const data = await res.json();
  const data2 = await players.json();


  return {
    props: {
      game: data,

    }
  }
}



export default function PastGames({ game,  }) {

  useEffect(() => {
    let tabsWithContent = (function () {
      let tabs = document.querySelectorAll('.tabs li');
      let tabsContent = document.querySelectorAll('.tab-content');

      let deactvateAllTabs = function () {
        tabs.forEach(function (tab) {
          tab.classList.remove('is-active');
        });
      };

      let hideTabsContent = function () {
        tabsContent.forEach(function (tabContent) {
          tabContent.classList.remove('is-active');
        });
      };

      let activateTabsContent = function (tab) {
        tabsContent[getIndex(tab)].classList.add('is-active');
      };

      let getIndex = function (el) {
        return [...el.parentElement.children].indexOf(el);
      };

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          deactvateAllTabs();
          hideTabsContent();
          tab.classList.add('is-active');
          activateTabsContent(tab);
        });
      })

      tabs[0].click();
    })();
  }, [])

  return (
    <div className="">


      {game.map((g) => (
        <div className="container" key={g.id}>


          <div className="inner-box">
            {/** Fetch team and display their corresponding score - */}
            <div className=' scoreboards'>
              <div className='team-one'>
                <div className='team-name'>

                  {g.opponents.slice(0, -1).map((o) =>
                    <figure className='immage-box' key={o.id}>
                      <img src={o.opponent.image_url} className='team-img is-rounded'></img>
                      <figcaption key={o.opponent.id}>
                        {o.opponent.name}</figcaption> </figure>)}
                </div>
              </div>
              <div className="scoresrn">
                <span className="teamoneSc">1</span>
                -
                <span className="teamoneSc">3</span>
              </div>
              <div className='team-one'>
                <div className='team-name'>

                  {g.opponents.slice(-1).map((o) =>
                    <figure className='immage-box' key={o.id}>
                      <img src={o.opponent.image_url} className='team-img is-rounded' key={o.opponent.name}></img>
                      <figcaption key={o.opponent.id}>
                        {o.opponent.name}</figcaption> </figure>)}
                </div>
              </div>
            </div>

            <div id="tabs-with-content">
              <div className="tabs is-toggle is-toggle-rounded is-centered">
                <ul className="tab-ul">
                  <li><a className="gamelinks">Game Info</a></li>
                  <li><a className="gamelinks">Players</a></li>
                  <li><a className="gamelinks">Stream</a></li>

                </ul>
              </div>
              <div>
                <section className="tab-content">

                  {/*Game Info **/}


                  <div className="lower-box columns is-multine">

                    <div className="column is-full">

                      <div className="dark"><span className="is-pulled-left">League</span>  <span className="is-pulled-right">{g.league && g.league.name}</span></div>
                      <div className="dark"><span className="is-pulled-left">Game:</span>  <span className="is-pulled-right">  {g.videogame && g.videogame.name} </span></div>
                      <div className="dark alt"><span className="is-pulled-left">Tournament</span>  <span className="is-pulled-right"> {g.tournament && g.tournament.name} | </span></div>
                      <div className="dark"><span className="is-pulled-left">Time & Date</span>  <span className="is-pulled-right"> <Moment format='DD/M - HH:MM'>{g.scheduled_at}</Moment></span></div>
                      <div className="dark alt"><span className="is-pulled-left">Winner</span>  <span className="is-pulled-right"> <b>{g.winner.name}</b> </span></div>
                    </div>
                  </div>

                </section>

                <section className="tab-content">
<div className='columns is-multiline'>
               


                <div className="column is-half">
                  {plays.opponents.slice(-1).map((y) => (
                    <>
                  <div className="teamblock alt" key={y.id}>{y.name}</div>
                  <div className='pl'>
                        {y.players.map((player) => (
                          <>
                        {player.name && (<div className="opp2 dark" key={y.slug} id={y.slug}>
                        <p key={player.id}>
                          {player.name ? (<span>{player.name}</span>) :(<p>Sorry, No players for this game have been released.</p>)}

                        </p>
                      </div>)}</>
                        ))}
                        </div>

                    </>))}
                </div>

                </div>
                </section>

                <section className="tab-content">
                <div className="column is-full">
        
                <div className="twitch" key={g.live_embed_url}>
                   <div className="twitch-video">
                     {g.live_embed_url ? (<iframe src={`${g.live_embed_url}&parent=riffyraff.me`} frameBorder="0" allowFullScreen="true" scrolling="no" height="300" width="100%">
                     </iframe>)
                       : <p>Sorry No Streams found please follow this link   <a href={g.streams.official.embed_url}>Watch now</a> - </p>
                     }</div></div>
                </div>
                </section>

              </div>
            </div>







            <br />
          </div>


        </div>
      ))}

   


    </div>
  )
}