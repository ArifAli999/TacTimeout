

//api fetching through API routes provided by next.js, good option but its unecessary
export async function getData() {

    //works.
    const response = await fetch('https://api.pandascore.co/matches/upcoming?sort=&page=1&per_page=30&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}