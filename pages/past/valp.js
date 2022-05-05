import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Router, withRouter } from "next/router"
import Fallback from '../../comps/Fallback'

const PastVal = (props) => {
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
    React.useEffect(() => {
      if(!props.games || !props.games.length) {
        backToLastPage(currentPage);
      }
    },[props.games])
  
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
  
      if(currentPage==1) {
        <Fallback/>
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
                              <h2 className="white-bold cs">VALORANT / FINISHED </h2>

        <div className="columns is-multiline">

            {props.games.length ? (
                <>
                    {props.games.map(q => (
                        <div className="column is-half" key={q.id}>
                            <div className='scorebox columns is-multiline'>
                                <div className='first column is-full'>
                                    {q.opponents.slice(0, -1).map(({ opponent }) => (
                                          <>
                                          
                                          {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                                          <><div key={opponent.id} className={opponent.acronym}>

                                            <Link href={'/past/' + q.slug} key={q.slug}>


                                                <a className="h2link" key={q.slug}>
                                                    {opponent.name}
                                                </a>
                                            </Link>

                                        </div><span className='score-live is-pulled-right'>
                                                {q.results.find((result) => result.team_id === opponent.id).score}
                                            </span></></>

                                    ))}
                                </div>
                                <div className='second column is-full'>
                                    {q.opponents.slice(-1).map(({ opponent }) => (
                                          <>
                                          
                                          {opponent.image_url ? (<div className='imgtinycont'><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                                          <><div key={opponent.id} className={opponent.acronym}>

                                            <Link href={'/past/' + q.slug} key={q.slug}>


                                                <a className="h2link" key={q.slug}>
                                                    {opponent.name}
                                                </a>
                                            </Link>

                                        </div><span className='score-live is-pulled-right'>
                                                {q.results.find((result) => result.team_id === opponent.id).score}
                                            </span></></>

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
       
          <div>{content}</div><br/>

        {props.games.length && (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => paginationHandler(currentPage)}> Load More </button></div>
          ) }

      </>
    );
  };
  
  export async function getServerSideProps({ query }) {
    const page = query.page || 1; //if page empty we request the first page
    const response = await fetch(
      `https://api.pandascore.co/matches/past?sort=&page=${page}&per_page=10&filter[videogame]=valorant&token=${process.env.TOKEN}`
    );
  
    const data = await response.json();
    return {
      props: {
        games: data,
      },
    };
  }
  
  export default withRouter(PastVal);