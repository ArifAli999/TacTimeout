import { useEffect, useState } from "react";



//PARAMS SETTINGS
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

// DATA & PLAYER LIST FETCH

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`https://api.pandascore.co/matches/running?search[slug]=${slug}&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
  const players = await fetch(`https://api.pandascore.co/matches/${slug}/opponents?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
  const data2 = await players.json();
  const data = await res.json();


  return {
    props: {
      game: data,
      plays: data2

    }
  }
}

// MAIN RENDER FUNCTION 
export default function LiveGames({ game, plays }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModals, setOpenModals] = useState(false);

  function toggleMenu() {
    setOpenModal(!openModal)
  }
  function toggleMenu2() {
    setOpenModals(!openModals)
  }

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
            <div className='scorebord_big scoreboards'>
            <div className='container columns is-multiline'>
              <div className='column is-full topTeam'>
                <div className='innerteam_cont'>
                {g.opponents.slice(0, -1).map(({ opponent }) => (
                    <>

                      {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                      <><div key={opponent.id} className='opponentBoard'>




                        <a className="white-link" key={g.slug}>
                          {opponent.name}
                        </a>

                        <p className='score-big'>
                          {g.results.find((result) => result.team_id === opponent.id).score}
                        </p>
                      </div>
                      
                      </></>

                  ))}

                </div>
              </div>

              <div className='column is-full topTeam'>
                <div className='innerteam_cont'>
                {g.opponents.slice(-1).map(({ opponent }) => (
                    <>

                      {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                      <><div key={opponent.id} className='opponentBoard'>



                    
                        <span className="white-link" key={g.slug}>
                          {opponent.name}
                        </span>
                        <span className='score-big'>
                          {g.results.find((result) => result.team_id === opponent.id).score}
                        </span>
                      
                      </div>
                      
                      </></>

                  ))}

                </div>
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
                      <div className="dark"><span className="is-pulled-left">Series</span>  <span className="is-pulled-right"> {g.serie.full_name} | {g.serie.tier.toUpperCase()} </span></div>
                      <div className="dark alt"><span className="is-pulled-left">Teams</span>  <span className="is-pulled-right">   {g.opponents.map((o) => o.opponent.name).join(" vs ")}  </span></div>
                    </div>
                  </div>

                </section>



                <section className="tab-content">
                  <div className='columns is-multiline'>
                    <div className="column is-half">
                      {plays.opponents.slice(0, -1).map((y) => (

                        <>
                    <div className="teamblock" key={y.id}>
                      {y.name}
                    <button className='toggle-modal' onClick={() => toggleMenu()}>
                                More Info
                              </button>
                    </div>
                          <div className='pl'>
                            {y.players.length ? (y.players.map((player) => (
                              <>
                                {player.name && (<div className="opp2 dark" key={y.slug} id={y.slug}>
                                  <div key={player.id}>
                                    {player.name.length ? 
                                    <div key={player.slug} className="playerlist">
                                     <div className="player-name">{player.name}</div>
                                      {(openModal && player.last_name) ? (<div className="player-age">{player.last_name.slice(0,5)}</div>) : '-'}

                                       {(openModal && player.hometown) ? (<div className="player-age">{player.hometown}</div>) : '-'}
                                       {openModal ? (<div className="player-age">{player.age}</div>) : '-'}
                                      </div>
                                      
                                      
                                      : <p>Sorry, No players for this game.</p>}

                                  </div>
                                </div>)}</>
                            ))): <p className="white-fallback">No players found</p>}
                          </div></>
                      ))}
                    </div>


                    <div className="column is-half">
                      {plays.opponents.slice(-1).map((y) => (

                        <>
                    <div className="teamblock alt" key={y.id}>{y.name}
                    <button className='toggle-modal light' onClick={() => toggleMenu2()}>
                                More Info
                              </button></div>
                          <div className='pl'>
                            {y.players.length ? (y.players.map((player) => (
                              <>
                                {player.name && (<div className="opp2 dark" key={y.slug} id={y.slug}>
                                  <div key={player.id}>
                                    {player.name.length ? 
                                    <div key={player.slug} className="playerlist">
                                      <div className="player-name">{player.name}</div>
                                      {(openModals && player.last_name) ? (<div className="player-age">{player.last_name.slice(0,5)}</div>) : '-'}

                                    {openModals && player.hometown ? (<div className="player-age">{player.hometown}</div>) : '-'}
                                    {openModals ? (<div className="player-age">{player.age}</div>) : '-'}
                                    </div>
                                    
                                    : <p>Sorry, No players for this game.</p>}

                                  </div>
                                </div>)}</>
                            ))): <p className="white-fallback">No players found</p>}
                          </div></>
                      ))}
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

  // RENDER FUNCTION END.
}