FROM node:16.13.1-stretch-slim

RUN mkdir -p /app
WORKDIR /app
COPY . /app


RUN npm install


EXPOSE 3000

CMD ["npm", "start"]
