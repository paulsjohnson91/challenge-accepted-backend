FROM node:11.3.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add app
COPY . /usr/src/app
RUN rm -rf node_modules
RUN npm install

# start app
CMD ng serve --host 0.0.0.0
