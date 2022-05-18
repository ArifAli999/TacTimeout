import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { Router, withRouter } from "next/router"
import Fallback from '../../comps/Fallback'

const UpDota = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    const [hide, setHide] = useState(true)


    function backHandler(page) {
      const currentPath = props.router.pathname;
      const currentQuery = props.router.query;
  
      if (currentPage == 1 && !props.games.length) {
        setHide(false);
  
      }
      else {
        currentQuery.page = currentPage - 1;
        setCurrentPage(currentQuery.page); 
  
        props.router.push({
          pathname: currentPath,
          query: currentQuery,
        });
      }
      setHide(true);
  
    }
  
    useEffect(() => {
  
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
      setCurrentPage(currentQuery.page); 
  
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
            <h2 className="white-bold cs">Dota 2 / SOON</h2>
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

          <div className='buttoncntrl is-flex is-flex-wrap-wrap		is-justify-content-center	mt-6'>
        {props.games.length > 0 ? (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => paginationHandler(currentPage)}> Load More </button></div>
        ) : ''}

        {currentPage > 1 ? (
          <div className='loadmorecont'>
            <button className="loadbtn" onClick={() => backHandler(currentPage)}> Back  </button></div>
        ) : ''}
      </div>
          

      </>
    );
  };
  
  export async function getServerSideProps({ query }) {
    const page = query.page || 1; //if page empty we request the first page
    const response = await fetch(
      `https://api.pandascore.co/matches/upcoming?sort=&page=${page}&per_page=10&filter[videogame]=dota-2&token=${process.env.TOKEN}`
    );
  
    const data = await response.json();
    return {
      props: {
        games: data,
      },
    };
  }
  
  export default withRouter(UpDota);