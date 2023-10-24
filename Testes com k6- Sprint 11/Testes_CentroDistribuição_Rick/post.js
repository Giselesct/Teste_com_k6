//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir ct não sera executado po rerro de proxy com viacep que não foi resolvido pelo TI.
export default function () {
  const url = ('https://localhost:7296/CentroDeDistribuicao');
  
  const payload = JSON.stringify({
    
      "nome": "Ctgi",
      "logradouro": "string",
      "numero": 61,
      "complemento": "marçalo",
      "bairro": "string",
      "cidade": "string",
      "uf": "string",
      "cep": "06385270",
      "status": true,
      "dataEHoraCriacao": "2023-08-01T12:35:23.310Z"
    
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      
    },
  };

  http.post(url, payload, params);

  
}


