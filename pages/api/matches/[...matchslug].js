export default async function handler(req, res) {
  const promiseArray = req.query.matchslug.map(async (slug) => {
  
    const response = await fetch(`https://api.pandascore.co/matches?search[slug]=${slug}&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 `)
    const jsonData = await response.json();
    return jsonData

  })

  const result = await Promise.all(promiseArray)
  res.status(200).json(result);

    
  }