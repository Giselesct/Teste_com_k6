import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7161/SubCategoria/3';
 

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.del(url, params);
}
