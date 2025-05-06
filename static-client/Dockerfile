FROM node:18 AS builder

# Accept environment variable as a build argument
ARG ENV

WORKDIR /epifi/web/

RUN mkdir /epifi/web/static-client

RUN apt update && apt install -y apt-transport-https

# install yarn
RUN echo "install yarn" \
&& curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
&& echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
&& apt update && apt install -y yarn

COPY ./package.json ./static-client
COPY ./yarn.lock ./static-client

RUN cd static-client && yarn && cd ..

COPY . ./static-client

# Use the environment variable in the yarn build command
RUN cd static-client && yarn build:${ENV} && cd ..

# The second and final stage
FROM scratch

COPY --from=builder /epifi/web/static-client ./static-client

CMD [ "echo", "web image"]
