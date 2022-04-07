import Link from "next/link";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`)
    const data = await res.json()
    const games = data;

    // Pass data to the page via props
    return {
        props:
        {

            results: games,
        }
    }

}

const liveGames = ({ results }) => {
    return (
        <div>
            <div className="game-container">
                <h2>Live Games NOW - </h2>
                {results.map((q) => (
                    <Link href = {'/live/' + q.slug}  key={q.id}>
                       <a className="live_link"> <h3>{q.name}</h3></a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default liveGames;