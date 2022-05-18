// API route to fetch users fvt games.


export default async function handler(req, res) {
  const promiseArray = req.query.matchslug.map(async (slug) => {
  
    const response = await fetch(`https://api.pandascore.co/matches?search[slug]=${slug}&token=${process.env.TOKEN} `)
    const jsonData = await response.json();
    return jsonData

  })

  const result = await Promise.all(promiseArray)
  res.status(200).json(result);

    
  }