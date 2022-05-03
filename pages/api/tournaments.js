export default async function handler(req,res) {
   
    const response = await fetch(`https://api.pandascore.co/tournaments/?sort=&page=1&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `)
    const jsonData = await response.json();
    const filteredData = jsonData.filter(x=> x.prizepool !==null)

    res.status(200).json(filteredData);
}