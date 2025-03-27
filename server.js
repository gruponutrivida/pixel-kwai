const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/enviar-evento', async (req, res) => {
  const clickid = "20HrowHH1_OU3SAtOFIJRA"; // clickid fixo para teste no Kwai

  const evento = {
    access_token: "v1YASo71sN6dJS52cdO2ZTHn8xGRXUlCZlNrd5iHrK4",
    clickid: clickid,
    event_name: "EVENT_ADD_TO_CART",
    is_attributed: 1,
    mmpcode: "PL",
    pixelId: "275046465307324",
    pixelSdkVersion: "9.9.9",
    properties: JSON.stringify({
      content_id: "botao-whatsapp",
      content_type: "botao",
      content_name: "Botão Adicionar ao Carrinho"
    }),
    testFlag: true,
    third_party: "nutrivida",
    trackFlag: true
  };

  try {
    const resposta = await axios.post('https://www.adsnebula.com/log/common/api', evento, {
      headers: {
        'accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json'
      }
    });

    res.json(resposta.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ erro: err.response?.data || err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
