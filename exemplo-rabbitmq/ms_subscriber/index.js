const amqp = require('amqplib');

async function subscribe() {
  try {
    // Conecta ao RabbitMQ utilizando o hostname definido no docker-compose
    const connection = await amqp.connect('amqp://user:password@rabbitmq:5672');
    const channel = await connection.createChannel();
    const queue = 'testeQueue';

    // Declara a fila (caso ela não exista)
    await channel.assertQueue(queue, { durable: false });
    console.log("Aguardando mensagens na fila:", queue);

    // Consome as mensagens enviadas para a fila
    channel.consume(queue, msg => {
      if (msg !== null) {
        console.log("Mensagem recebida:", msg.content.toString());
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Erro ao consumir mensagens', error);
  }
}

subscribe();
