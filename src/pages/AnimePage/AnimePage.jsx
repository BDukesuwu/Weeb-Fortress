import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination'

export default function AnimePage() {
  
const fetch = require('node-fetch');
const [data, setData] = useState([])
const [query, setQuery] = useState([])

const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=20&search=+${query}`;

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

  const onChangeHandler = (e) => {
    setQuery(e.target.value)
  }

return (
  <div>
    <h1>Anime List</h1>
    <form>
      <input type="text" value={query} onChange={onChangeHandler}/>
      <button>Search</button>
    </form>

    {data.map(data => (
      <div key={data._id}>
        <h5>{data.title}</h5>
        <img src={data.image}/>
      </div>
))}
 
    </div>
      );
  }