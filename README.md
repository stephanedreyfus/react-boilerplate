# Notes and Modifications Pertaining to DMI Takehome

I want to thank Reed and DMI for inviting me to take this take home. I am currently unable to complete a great deal of the tasks listed below. I have learned a great deal about Redux-Saga, Reselect, styled components, the powerful tools of React-Boilerplate, and many other aspects of making full-stack apps with React. I appreciate the concept of sagas and plan to use them in future apps: they remove a lot of the potential confusion of Redux thunks. Wile I am keen on the concepts of React, Redux, sagas, and these many libraries, I am still not proficient in their execution.

### Required Basic Tasks
- [X] Create an app using React-Boilerplate
- [ ] Page with UI to input a string saved to a database
- [ ] Page to display all stored strings
- [X] Ability to navigate between pages
- [X] Meaningful layout
- [X] Uses a Node / Express server
- [X] Use React Router
- [ ] Redux
- [ ] Redux Saga
- [ ] Reselect
- [X] Styled components
- [ ] Unit Tests - at least one test one one new component

### Databases
Using PostgreSQL create the following two databses:
- phrases
- phrases-test

**Database runs on port 3001**

### To start front end:
From project directory
```sh
$ npm start
```
**Front end runs on port 3000**

### To start database server:
From project directory
```sh
$ cd backend
$ nodemon db_server.js
```
**Database runs on port 3001**

### To run front end tests:
From project directory
```sh
npm test
```

## Given More Time and Experience
There is a lot left to be done, as can be seen from the checklist at the top of the file. Nonetheless, here are some things I would liked to have accomplished:
- Tests on the db
- Test on the controlled string component
- Modal for entering of new phrases
- More styling
  - Background images
  - Favicon
- A more comphrensive README file.
