FROM node
WORKDIR /app
COPY . .
RUN npm i -f
# CMD ["ls","&&","npm","start"]
EXPOSE 80
