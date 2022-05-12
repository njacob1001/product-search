FROM node:16-buster-slim
RUN apt-get update
RUN mkdir -p /app/cms/
WORKDIR /app/cms/
COPY . .
RUN ["yarn","--"]
ENV NODE_ENV=production
EXPOSE 3001
CMD ["yarn","start:api"]
