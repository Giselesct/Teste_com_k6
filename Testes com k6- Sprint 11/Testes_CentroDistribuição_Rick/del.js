import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/CentroDeDistribuicao/08db6e8b-e62f-493d-88ae-f35e065cea9e';
 

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.del(url, params);
}