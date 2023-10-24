import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '1m', target: 3 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://localhost:7296/Subcategoria');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

