#  Frontend Assessment

## Author

### Name: vicstar
### Email: freedi.lancer@gmail.com

## Live Demo
[Bejamas Frontend Assessment](https://Bejamas-assessment.herokuapp.com/)

## Description

Created by using [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with following libraries including:

  - React v17.0.2
  - Type Checker - TypeScript
  - HTML5 & BEM approach
  - State management - Redux Thunk & Toolkit
  - Unit Testing - Jest & Enzym
  - Format & Lint - ESLint & Prettier

Custom Templates, format, and ESlint configurations.

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder.
- `yarn build:serve` - run a local static build using the production build using serve library. Install `yarn install -g serve`.
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

## State Management

The code is set for [Redux Toolkit](https://medium.com/react-courses/instant-learn-react-redux-toolkit-with-a-simple-minimalistic-example-3c63c296ed65) you pick.

## Unit Testing

Unit Testing is supported with [Enzyme](https://airbnb.io/enzyme/) that works with [Jest](https://github.com/facebook/jest).

To run the tests:

`$ yarn test`

## Eslint configurations

Lint is set according to Airbnb style guide — as part of their style guide.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.
