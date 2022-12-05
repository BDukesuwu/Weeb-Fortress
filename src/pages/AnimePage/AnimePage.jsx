import { useState, useEffect } from 'react';

export default function AnimePage() {
  
const fetch = require('node-fetch');
const [data, setData] = useState([])

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=20';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5565d9efb7mshdf96965f87c1810p1d20f1jsn8eea04465161',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json()) //grab items from api json file
	.then(json => setData(json.data))
	.catch(err => console.error('error:' + err));

  
return (
  
          <div>
            <h1>Anime List</h1>

            {data.map(data => (
              <div key={data._id}>
                <h5>{data.title}</h5>
                {/* <h5>{data.image}</h5> */}
              </div>
           ))}
          </div>
      );
  }