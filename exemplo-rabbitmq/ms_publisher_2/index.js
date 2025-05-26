const amqp = require('amqplib');
const express = require('express');
const app = express();
const port = 4001;

async function publish(message) {
  try {
    // Conecta ao RabbitMQ usando o hostname definido no docker-compose
    const connection = await amqp.connect('amqp://user:password@rabbitmq:5672');
    const channel = await connection.createChannel();
    const queue = 'testeQueue';

    // Declara a fila (caso ela não exista)
    await channel.assertQueue(queue, { durable: false });
    // Envia a mensagem para a fila
    channel.sendToQueue(queue, Buffer.from(message));
    console.log("Mensagem enviada pelo publisher 2:", message);
  } catch (error) {
    console.error('Erro ao enviar mensagem', error);
  }
}

app.use(express.json());

app.post('/publish', async (req, res) => {
  await publish(req.body.message);
  console.log('Mensagem recebida no publisher:', req.body.message);
  res.send('Cadastrado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})




