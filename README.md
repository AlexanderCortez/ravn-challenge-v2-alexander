# Getting Started

This project consumes a graphql api server with apollo client, it loads a list of people with their details.

## Project setup

- Create a `.env` file in your root directory with some user specific values:

```
REACT_APP_GRAPHQL_SERVER=https://graphql-api-url
```
You can take the `env-example` file as reference.

- Install deps

You can run `npm install`, it will install all the required deps for the local development.

- Run the application

You can simply run `npm run start` and the local server will start.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

It runs all the test with jest

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Codegen

You can generate and update the graphql generate schema by running `npm run codegen`

## Linters

You can run the tests and linter by `npm run lint` and `npm run test`

## Deploy

You can see a live demo of the repo on https://ravn-challenge-v2-alexander.herokuapp.com/

![Screenshot_54](https://user-images.githubusercontent.com/22355839/134826047-6d09a608-6197-482c-8c7e-0e63cae73cfe.png)

![Screenshot_55](https://user-images.githubusercontent.com/22355839/134826048-8e5c1c2b-8ac7-4c39-8341-eec68010ea12.png)

![Screenshot_56](https://user-images.githubusercontent.com/22355839/134826050-7ed8de94-790c-4f85-bedd-c664a4f75d28.png)

![Screenshot_57](https://user-images.githubusercontent.com/22355839/134826051-d148cb8d-78bc-4ff1-8d4e-4258234f8ce6.png)

## Stack used

- Apollo client
- styled-component/breakpoints
- tiny-slider
- codegen
- husky
- prettier
- typescript
- jest/enzyme