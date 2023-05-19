FROM node
WORKDIR /fronend
COPY . .
RUN npm i -f
# CMD ["ls","&&","npm","start"]
EXPOSE 80