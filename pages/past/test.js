import Head from 'next/head'
import Link from 'next/link'

import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate'
import {Router, withRouter} from "next/router"


const Blog = (props) => {
  
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => { //After the component is mounted set router event handlers
        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);
     

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])

    const paginationHandler = (page) => {
        const currentPath = props.router.pathname;
        const currentQuery = props.router.query;
        currentQuery.page = (currentPage + 1);
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
               loading
            </div>
        )
    } else {
        //Generating posts list
        content = (
            <>
                {props.posts.map((post) => (
                    <div className='s' key={post.id}>
                        <img variant="top"  width={360} height={215} />
                        <div>
                            <div>
                             
                            </div>
                            <div className="mb-2 text-muted"></div>
                            <div key={post.name}>
                                {post.name}
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
   
    return (
        
    
            <>
        <div className={"container-md"}>
                <div>
                    {content}
                    <a onClick={()=> setCurrentPage(currentPage +1)}>
                </a>
                </div>
                <a onClick={()=> paginationHandler(currentPage)}>
                    moore
                </a>
          
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'Load more'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    initialPage={currentPage}
                    pageCount={10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={paginationHandler} />
            </div></>
    
    )
}

export async function getServerSideProps({query}) {
    const page = query.page || 1; //if page empty we request the first page
    const response = await fetch(`https://api.pandascore.co/matches/upcoming?sort=&page=${page}&per_page=10&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
   
   
    const posts = await response.json();
    return {
        props: {
            posts,
        
        }
       
      
    };
}

export default withRouter(Blog)