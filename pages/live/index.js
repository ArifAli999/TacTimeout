import Link from "next/link";
import react, {useState, useEffect} from "react";
import { useRouter } from 'next/router';


export async function getStaticProps({ res }) {
    try {
        const result = await fetch(`https://api.pandascore.co/matches/running??sort=&page=1&per_page=10&&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
        const data = await result.json();

        return {
            props: { game: data },
            revalidate: 10 // 10 seconds 
        };
    } catch (error) {
        res.statusCode = 404;
        return { props: {} };
    }
}



const UpcomingGames = ({ game }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const router = useRouter();
    const refreshData = () => {
      router.replace(router.asPath);
      setIsRefreshing(true);
    };
    useEffect(() => {
      setIsRefreshing(false);
    }, [game]);
    return (

            <div className="container">
                <h2>Live Games  - </h2>
                <div className="columns is-multiline">
                {game.map(q => (
                    <div className="column is-half" key={q.id}>
                        <div className="inner">
                        <div className="inner__box">
                     <Link href = {'/live/' + q.slug}  key={q.slug}>
                       <a className="h2link" key={q.slug}> {q.name}</a>
                  </Link></div>
                  </div>
                  </div>
                ))}
                </div>
            </div>
     
   
    );
}

export default UpcomingGames;