FROM node:14.17-alpine

ENV TZ Asia/Seoul
RUN	apk update && apk upgrade && \
	apk add --update tzdata && \
	cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
	echo "${TZ}" > /etc/timezone

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules

RUN yarn
RUN yarn build

EXPOSE 80
CMD [ "yarn", "start:prod" ]