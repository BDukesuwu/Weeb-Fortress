import { useState, useEffect, useRef } from 'react';

export default function AnimePage() {
  const fetch = require('node-fetch');

  const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortOrder=asc';
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5565d9efb7mshdf96965f87c1810p1d20f1jsn8eea04465161',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}


