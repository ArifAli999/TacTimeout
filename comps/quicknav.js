import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Router from "next/router";

function QuickNav() {
    const router = useRouter();

  return (
   
         <div className="quick-nav">
                <div className="logoiconsbox is-flex">
                    <Link href="/live/val">
                        <span className={router.pathname == "/live/val" || (router.pathname == "/upcoming/valorant" ) ||  (router.pathname == "/upcoming/valp" )  ? "is-pulled-right valImg onn custom " : "is-pulled-right valImg custom"}></span>
                    </Link>

                    <Link href="/live/csgo">
                        <span className={(router.pathname == "/live/csgo") || (router.pathname == "/upcoming/csgo" ) ||  (router.pathname == "/past/csgop" ) ? "is-pulled-right csImg onn  custom" : "is-pulled-right csImg custom"}></span>
                    </Link>

               

                    <Link href="/live/dot">
                        <span className={router.pathname == "/live/dot" || (router.pathname == "/upcoming/dota" ) ||  (router.pathname == "/past/dota" ) ? "is-pulled-right dotImg onn  custom" : "is-pulled-right dotImg custom"}></span>
                    </Link>
                    

                </div>
            </div>
  
  )
}

export default QuickNav