export const getStaticProps = async () => {

    const res = await fetch(`https://api.pandascore.co/matches/upcoming?&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
    const data = await res.json();
    console.log(data)

    return {
        props: {
         game: data
        }
    }
}


const upcomingGames = ({ game }) => {
    return (
        <div>
            <div className="game-container">
                <h2>Upcoming Games  - </h2>
                {game.map((q) => (
                    
                       <a className="live_link" key={q.id}> <h3>{q.name}</h3></a>
                  
                ))}
            </div>
        </div>
    )
}

export default upcomingGames;