FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY sort.js server.js ./
COPY public ./public
EXPOSE 8888
CMD ["node", "server.js"]
