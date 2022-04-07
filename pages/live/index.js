import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch(`https://api.pandascore.co/matches/running?&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
    const data = await res.json();
    

    return {
        props: {
         game: data
        }
    }
}

const liveGames = ({ game }) => {
    return (
        <div>
            <div className="game-container">
                <h2>Live Games NOW - </h2>
                {game.map((q) => (
                    <Link href = {'/live/' + q.slug}  key={q.slug}>
                       <a className="live_link"> <h3>{q.name}</h3></a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default liveGames;