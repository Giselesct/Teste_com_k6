import http from 'k6/http';

export default function () {
  const url =  'https://localhost:7161/Produto/30';
 

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.del(url, params);
}