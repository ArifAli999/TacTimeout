import Head from 'next/head'
import Link from 'next/link'

import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate'
import {Router, withRouter} from "next/router"


const Blog = (props) => {
  
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => { 
        //After the component is mounted set router event handlers

        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, []);

    React.useEffect(() => {
       
        if(!props.games || !props.games.length) {
          backToLastPage(currentPage)
        }
      },[props.games])
    



    const paginationHandler = (page) => {
        const currentPath = props.router.pathname;
        const currentQuery = props.router.query;
  

        
        props.router.push({
            pathname: currentPath,
            query: currentQuery,
        })
        setCurrentPage(currentQuery.page)
    }

    const backToLastPage = (page) => {
        setCurrentPage(currentPage-1)
        const currentPath = props.router.pathname;
        const currentQuery = currentPage;
        setCurrentPage(currentQuery.page)
        props.router.push({
            pathname: currentPath,
            query: currentQuery,
        })
       
    }

    let content;
    if (isLoading) {
        content = (
            <div >
               <h2 className="loading-text">loading.</h2>
            </div>
        )
    } else {
        //Generating posts list
        content = (
            <div className="container">
            <h2> Live Games  - </h2>
            
            <div className="columns is-multiline">
                
                {props.games.map(q => (
                    <div className="column is-half" key={q.id}>
                        <div className="inner">
                            <div className="inner__box">
                                <Link href={'/live/' + q.slug} key={q.slug}>
                                    <a className="h2link" key={q.slug} data-cy="id"> {q.name}</a>
                                </Link>
                                {/*
            {q.opponents.map(({opponent}) => (
<span key={opponent.id} className={opponent.acronym}>
{opponent.name}
({q.results.find((result) => result.team_id === opponent.id).score})
</span>     ))}*/}
                                <span className="is-pulled-right tag is-danger">
                                    LIVE
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div> 
        );
    }
   
    return (
        
    
            <>
        <div className={"container-md"}>
                <div>
                    {content}
                  
                </div>
             {props.games.length ? (<a onClick={()=> paginationHandler(currentPage)}>  moore </a>) : ( ()=> backToLastPage(currentPage) )}   
          
             
            </div></>
    
    )
}

export async function getServerSideProps({query}) {
    const page = query.page || 1; //if page empty we request the first page
    const response = await fetch(`https://api.pandascore.co/matches/running?sort=&page=${page}&per_page=10&filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
   
   
    const data = await response.json();
    return {
        props: {
            games: data
        
        }
       
      
    };
}

export default withRouter(Blog)