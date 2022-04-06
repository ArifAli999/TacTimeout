import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://api.pandascore.co/matches/running?sort=&page=1&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`)
  const data = await res.json()
  const games = data;

  // Pass data to the page via props
  return { props: { 
    results: games,
   } }

}


export default function Home({results}) {

  return (
  <div>
{results.map((q,index) => (
  <div key={index}>
    <h3>{q.name}</h3>
  </div>
))}
  </div>
  )
}
