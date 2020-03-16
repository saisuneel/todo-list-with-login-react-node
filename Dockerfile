FROM node:13

RUN echo "0===="
WORKDIR /app

COPY . .
RUN echo "1===="
RUN npm install

RUN echo "2====="
RUN npm run build

EXPOSE 3000

RUN echo "3====="
CMD ["npm", "run", "start"]