
// fetch upcoming CS:GO games.

export async function GetGames() {
    //works.
    const response = await fetch('https://api.pandascore.co/matches/upcoming?filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}
