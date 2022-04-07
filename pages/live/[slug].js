export const getStaticPaths = async () => {
    const res = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
    const data = await res.json();

    const paths = data.map(o => {
        return {
            params: { slug: o.slug.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await fetch(`https://api.pandascore.co/matches/running?search[slug]=${slug}&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `);
    const data = await res.json();
    console.log(data)

    return {
        props: {
            game: data
        }
    }
}
export default function live({ game }) {
    return (
        <div>
            <h2> Single Game deets.</h2>

            <div>
                {game.map((o) => (
                    <p>{o.name}</p>
                ))}
            </div>


        </div>
    )
}