export default async function handler(req,res) {
   
    const response = await fetch(`https://api.pandascore.co/tournaments/?sort=&page=1&per_page=50&token=${process.env.TOKEN} `)
    const jsonData = await response.json();
    const filteredData = jsonData.filter(x=> x.prizepool !==null)

    res.status(200).json(filteredData);
}