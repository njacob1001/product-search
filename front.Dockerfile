FROM node:16-buster-slim
RUN apt-get update
RUN mkdir -p /app/cms/
WORKDIR /app/cms/
COPY . .
RUN ["yarn","--"]
RUN ["yarn","build"]
EXPOSE 3000
CMD ["npx", "serve","build"]
