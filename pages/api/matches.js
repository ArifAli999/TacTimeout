// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch(`https://api.pandascore.co/matches/?sort=&page=1&per_page=50&token=${process.env.TOKEN} `)
  const jsonData = await response.json();
  res.status(200).json(jsonData);

}
