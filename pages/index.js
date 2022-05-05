import Head from "next/head";
import Moment from "react-moment";
import Link from "next/link";
import SearchTest from "./past/tournComp";
import { useEffect } from "react";
import FavGames from "./favgames";

export default function Home() {










  return (

    <div>
      <Head>
        <title>Tac Timeout</title>

      </Head>
      <div className="tourBox columns is-multiline">
      <div className="column is-half">
    <SearchTest/>
    </div>
    <div className="column is-half">
    <FavGames/>
    </div>
    </div>
  
    </div>
  )
}





