FROM node:15
WORKDIR /app
COPY pacakge*.json .
RUN npm install
COPY . .
CMD ["node","."]