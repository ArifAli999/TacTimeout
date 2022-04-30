import useSWR from 'swr'
import { useEffect, useState } from 'react'
import axios from 'axios';

// example of SWR fetching - that could be used but wasn't used due to API restrictions.
// SWR is a React Hooks library for data fetching.
//SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.


const fetcher = (url) => axios.get(url).then((res) => res.data);


const SWRTest = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `https://api.pandascore.co/matches/upcoming?sort=&page=${page}&per_page=30&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`,
    fetcher
  );
  console.log(data)
  console.log(page)


  if (error) return <div>Something went wrong...</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul role="list">
      <button

        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <button

        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      {data &&
        data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
    </ul>
  )
}

export default SWRTest