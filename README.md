# Notes and Modifications Pertaining to DMI Takehome

I want to thank Reed and DMI for inviting me to take this take home. I am currently unable to complete a great deal of the tasks listed below. I have learned a great deal about Redux-Saga, Reselect, styled components, the powerful tools of React-Boilerplate, and many other aspects of making full-stack apps with React. I appreciate the concept of sagas and plan to use them in future apps: they remove a lot of the potential confusion of Redux thunks.

### Update After Continuing Work

Having spent more time with the demo program I was finally able to make progress. Once the process (and sequence of events) was more clear, I was able to get the main parts of the app to work using the require libraries: from the `initial dispatch` triggered from a page, to the `saga` (which handles `async` calls to the backend spectacularly), through the `reducer` (using `Immer` to simplify updating the `store`), and then calling any new information through the `selectors`, and finally showing results on the page. I really appreciate all the time I've been able to take with this task as I have learned a great deal about ways in which React can be made more robust.

### A Note About Container Nomenclature

I'm satisfied with the container `Collection`, but I wanted to clarify why the container that accepts a new phrase is called `Phrases`. When I started the exercise I was unaware of how Boilerplate builds components and containers, and simply started with a single component that would do both display and entry. When I got more comfortable with Boilerplate I separated my concerns, so to speak, and found myself with the fairly complex version of `Phrases` as it now exists. I have decided that, for the time being, refactoring the name of the container may create far more bugs than currently warranted. Given an unlimited amount of time I would probably refactor the name of the `Phrases` container to `AddPhrase`. 

---

## Required Basic Tasks
- [X] Create an app using React-Boilerplate
- [X] Page with UI to input a string saved to a database
- [X] Page to display all stored strings
- [X] Ability to navigate between pages
- [X] Meaningful layout
- [X] Uses a Node / Express server
- [X] Use React Router
- [X] Redux
- [X] Redux Saga
- [X] Reselect
- [X] Styled components
- [X] Unit Tests - at least one new test one one new component

---

## Databases
Using PostgreSQL create the following two databses:
- phrases
- phrases-test

## To start database server:
From project directory
```sh
$ cd backend
$ nodemon db_server.js
```
**Database runs on port 3001**

## To start front end:
From project directory
```sh
$ npm start
```
**Front end runs on port 3000**

---

## To run front end tests:
From project directory
```sh
npm test
```

## Tests Added
- To Phrases container:
    - Action tests in `Phrases/tests/actions.test.js`
    - Reducer test in `Collection/tests/reducer.test.js`
- To Collection container:
    - Action tests in `Collection/tests/actions.test.js`
    - Reducer tests in `Collection/tests/reducer.test.js`
    - Selector tests in `Collection/tests/selectors.test.js`
    - Saga tests in `Collection/tests/saga.test.js`
- To Input component:
    - Index tests in `InputForm/tests/index.test.js`

## Given More Time and Experience
- Tests on the db
- More tests on the input form
- Test on the controlled input component
- Refactor input component to be controlled by `Redux store` and not `local state`
- Modal for entering of new phrases
- Refactor styling
  - Background images
  - Modal or other warning type instead of an `alert` on the input page.
  - Animated graphic instead of text for when a page is loading.
- A more comphrensive README file.
