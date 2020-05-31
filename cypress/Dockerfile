FROM cypress/browsers:chrome69
COPY . .
RUN npm install
RUN $(npm bin)/cypress run --browser chrome