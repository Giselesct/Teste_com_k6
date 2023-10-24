import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/Categoria/3fa85f64-5717-4562-b3fc-2c963f66afa6';
 
  const params = {
    headers: {
      'Content-Type': 'application/json',
  },
  };

  http.del(url, params);
}
