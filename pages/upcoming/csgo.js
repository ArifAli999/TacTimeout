import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Router, withRouter } from "next/router"
import Fallback from '../../comps/Fallback'

const UpCS = (props) => {
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
      console.log(props.games)
      content = (
          
          <>
            <h2 class="white-bold cs">CS:GO / SOON</h2>
       {props.games.length >0  ? (
           
        <div className='columns is-multiline '>
                              
            {props.games.map(q => (
                <div className="column is-half" key={q.id}>
                    <div className='scorebox columns is-multiline'>
                        <div className='first column is-full'>
                        <Link href={'/upcoming/' + q.slug} key={q.slug}>
                                <a className="h2link" key={q.slug}>
                                    {q.name} 
                                </a>
                            </Link>
                        </div>
             
                       


                    </div>
                 
                </div>
            ))}
        </div>) : (

        <Fallback title={'CS:GO'} />)}

        </>
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
      `https://api.pandascore.co/matches/upcoming?sort=&page=${page}&per_page=10&filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`
    );
  
    const data = await response.json();
    return {
      props: {
        games: data,
      },
    };
  }
  
  export default withRouter(UpCS);