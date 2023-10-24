//não  rodei o codigo com esta função falta corrigir este codigo

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 3 },
    { duration: '1m', target: 2 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir Produtos não sera executado po rerro de proxy com viacep que não foi resolvido pelo TI.
export default function () {
  const url =  'https://localhost:7161/Produto';
  const payload = JSON.stringify({
    
    "nome": "Blusinha da Gi",
    "descricao": "Pequena",
    "peso": 27,
    "altura": 34,
    "largura": 35,
    "comprimento": 90,
    "valor": 40,
    "quantidadeEmEstoque": 50,
    "centroDeDistribuicaoId": "1",
    "status": true,
    "dataEHoraCriacao": "2023-07-27T01:48:55.820Z",
    "subcategoriaId": "5"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}