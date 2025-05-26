FROM node:latest

WORKDIR /app

# Copia os arquivos de definição do projeto e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

CMD ["npm", "start"]
