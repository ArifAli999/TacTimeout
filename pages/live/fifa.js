import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Router, withRouter } from "next/router"
import Fallback from '../../comps/Fallback'
import { FaHeart } from 'react-icons/fa'


const LiveFifa = (props) => {
const [fvt, setFvt] = useState(false);


  function saveToLocal (id) {
    var array = JSON.parse(window.localStorage.getItem("Slug")) || [];//the "|| []" replaces possible null from localStorage with empty array
    var value = id;
    if(array.indexOf(value) == -1){
        array.push(value);
        window.localStorage.setItem("Slug", JSON.stringify(array));
    }
  
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
  
      if(currentPage==1 && !props.games.length) {
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
          <h2 className="white-bold">loading.</h2>
        </div>
      );
    } else {
      //Generating posts list
  
      content = (
        <div className='container is-fluid'>
          <h2 className="white-bold">FIFA / LIVE</h2>
        <div className="columns is-multiline">

            {props.games.length ? (
                <>
                    {props.games.map(q => (
                        <div className="column is-half" key={q.id}>
                            <div className='scorebox columns is-multiline'>
                            <div className='scorebox-title-head'>
                                  
                            <span className='alteredtext'>{q.name}</span>
                            <button className='favbtn is-pulled-right' onClick={()=> saveToLocal(q.slug)} key={q.id}><FaHeart key={q.slug}/></button>
                                   

                                  </div>
                                <div className='first column is-full'>
                                 
                                    {q.opponents.slice(0, -1).map(({ opponent }) => (
                                          <React.Fragment key={opponent.id}>
                                          
                                          {opponent.image_url ? (<div className='imgtinycont' key={opponent.id}><img src={opponent.image_url} className="teamlogo-small"></img></div>) : (<div className='placehoder-img'></div>)}
                                        <div  className={opponent.acronym}>

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
       
          <div>{content}</div><br/>

        {props.games.length >0 ? (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => paginationHandler(currentPage)}> Load More </button></div>
          ) : ''}

      </>
    );
  };
  
  export async function getServerSideProps({ query }) {
    const page = query.page || 1; //if page empty we request the first page
    const response = await fetch(
      `https://api.pandascore.co/matches/running?sort=&page=${page}&per_page=10&filter[videogame]=fifa&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`
    );
  
    const data = await response.json();
    return {
      props: {
        games: data,
      },
    };
  }
  
  export default withRouter(LiveFifa);