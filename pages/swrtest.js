import useSWR from 'swr'
import {useEffect} from 'react'

// example of SWR fetching - that could be used but wasn't used due to API restrictions.
// SWR is a React Hooks library for data fetching.
//SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.


const fetcher = (url) => fetch(url).then((res) => res.json())
const COMMENTS_URL = 'api/test'



const CommentsList = (props) => {
  const { data, error } = useSWR(COMMENTS_URL, fetcher)
  useEffect(() => {
    fetch('api/test')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])
  

  if (error) return <div>Something went wrong...</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul role="list">
      {data &&
        data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
    </ul>
  )
}

export default CommentsList