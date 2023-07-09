const url =process.env.GEOURL
export const geoOptions = {
  method: 'GET',
  url: url,
  headers: {
    'X-RapidAPI-Key': '271e88106amsh213d27c3c0aa724p1a4ec4jsn0b0d5407d62e',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

