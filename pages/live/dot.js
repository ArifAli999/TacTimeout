import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Router, withRouter } from "next/router"
import Fallback from '../../comps/Fallback'
import { FaHeart } from 'react-icons/fa'


const LiveDota = (props) => {
  const [fvt, setFvt] = useState(false);
  const [hide, setHide] = useState(true)

  var fvtgames = [];

  function saveToLocal(slug, id) {
    var array = JSON.parse(window.localStorage.getItem("Slug")) || [];
    var value = slug;
    if (array.indexOf(value) == -1) {
      array.push(value);
      window.localStorage.setItem("Slug", JSON.stringify(array));
      if (typeof window !== 'undefined') {
        document.getElementById(id).classList.add("hidden");
      }
    }

  }

  function backHandler(page) {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;

    if (currentPage == 1 && !props.games.length) {
      setHide(false);

    }
    else {
      currentQuery.page = currentPage - 1;
      setCurrentPage(currentQuery.page); // THE code that breaks my code.

      props.router.push({
        pathname: currentPath,
        query: currentQuery,
      });
    }
    setHide(true);

  }


  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    //After the component is mounted set router event handlers

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);
  useEffect(() => {
    if (!props.games || !props.games.length) {
      backToLastPage(currentPage);
    }
  }, [props.games])

  //The main change is here
  //It will be triggered whenever `props.games` gets updated


  const paginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = currentPage + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
    setCurrentPage(currentQuery.page);
  };

  const backToLastPage = (page) => {


    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;

    if (currentPage == 1 && !props.games.length) {
      <Fallback />

    }
    else {
      currentQuery.page = currentPage - 1;
      setCurrentPage(currentQuery.page); // THE code that breaks my code.

      props.router.push({
        pathname: currentPath,
        query: currentQuery,
      });
    }




  };

  let content;
  if (isLoading) {
    content = (
      <div>
        <h2 className="loading-text">loading.</h2>
      </div>
    );
  } else {
    //Generating posts list

    content = (
      <div className='container is-fluid'>
        <div className="columns is-multiline">

          {props.games.length ? (
            <>
              {props.games.map(q => (
                <div className="column is-half" key={q.id}>
                  <div className='scorebox columns is-multiline'>
                    <div className='scorebox-title-head'>

                      <span className='alteredtext'>{q.name}</span>
                      <button className='favbtn is-pulled-right' onClick={() => saveToLocal(q.slug,q.id)} key={q.id} id ={q.id}><FaHeart key={q.slug} /></button>


                    </div>
                    <div className='first column is-full'>

                      {q.opponents.slice(0, -1).map(({ opponent }) => (
                        <React.Fragment key={opponent.id}>

                          {opponent.image_url ? (<div className='imgtinycont' key={opponent.id}><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                          <div className={opponent.acronym}>

                            <Link href={'/live/' + q.slug} key={q.slug}>


                              <a className="h2link" key={q.slug}>
                                {opponent.name}
                              </a>
                            </Link>

                          </div><span className='score-live is-pulled-right'>
                            {q.results.find((result) => result.team_id === opponent.id).score}
                          </span></React.Fragment>

                      ))}
                    </div>
                    <div className='second column is-full'>
                      {q.opponents.slice(-1).map(({ opponent }) => (
                        <React.Fragment key={opponent.id}>

                          {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                          <><div key={opponent.slug} className={opponent.acronym}>

                            <Link href={'/live/' + q.slug} key={q.slug}>


                              <a className="h2link" key={q.slug}>
                                {opponent.name}
                              </a>
                            </Link>

                          </div><span className='score-live is-pulled-right'>
                              {q.results.find((result) => result.team_id === opponent.id).score}


                            </span>
                          </></React.Fragment>

                      ))}
                    </div>




                  </div>

                </div>
              ))}
            </>) : (

            <Fallback title={'Valorant'} />


          )}

        </div>
      </div>
    );
  }

  return (
    <>

      <div>{content}</div><br />

      <div className='buttoncntrl is-flex is-flex-wrap-wrap		is-justify-content-center	mt-6'>
        {props.games.length > 0 ? (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => paginationHandler(currentPage)}> Load More </button></div>
        ) : ''}

        {currentPage > 1 ? (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => backHandler(currentPage)}> back  </button></div>
        ) : ''}
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1; //if page empty we request the first page
  const response = await fetch(
    `https://api.pandascore.co/matches/running?sort=&page=${page}&per_page=10&filter[videogame]=dota-2&token=${process.env.TOKEN}`
  );

  const data = await response.json();
  return {
    props: {
      games: data,
    },
  };
}

export default withRouter(LiveDota);