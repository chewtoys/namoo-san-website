FROM node:24.18.0-alpine

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /root

ARG DEV_DIRENV_VERSION=v2.19.0
RUN wget -O direnv https://github.com/direnv/direnv/releases/download/$DEV_DIRENV_VERSION/direnv.linux-amd64 && \
    mv direnv /usr/local/bin/ && \
    chmod +x /usr/local/bin/direnv && \
    echo 'eval "$(direnv hook bash)"' >> ~/.bashrc

RUN npm install --global @vue/cli @vue/cli-init

ADD nuxt /nuxt
WORKDIR /nuxt


RUN npm ci

EXPOSE 3000
CMD ["npm", "run", "dev"]
