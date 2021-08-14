Taroko

===

## Table of Contents

- [Taroko](#taroko)
  - [Table of Contents](#table-of-contents)
  - [Getting Start](#getting-start)
  - [2. visit http://localhost:3000 with browser](#2-visit-httplocalhost3000-with-browser)
  - [Introduction](#introduction)
  - [Folder Structure](#folder-structure)
  - [Styles and Layouts](#styles-and-layouts)
  - [Features](#features)
  - [Coding Rule](#coding-rule)
  - [Redux and Redux-Saga](#redux-and-redux-saga)
  - [Deploy](#deploy)

---
## Getting Start

1. install dependency package in project
  > yarn
2. visit http://localhost:3000 with browser
---
## Introduction
  Taroko demo.
  With CRUD and filter functions.
---
## Folder Structure
```
.
├── README.md
├── apis
├── config
├── redux
│   ├── actions
│   ├── reducers
│   └── sagas
├── containers
├── components
├── next.config.js
├── .eslintrc.js
├── node_modules
├── quiz.txt
│   └── [...]
├── package.json
├── pages
│   ├── index.js
│   ├── _app.js
│   ├── _document.js
│   └── _globalStyle.js
├── public
│   └── favicon.ico
└── yarn.lock
```
---
## Styles and Layouts

Using style-components with next.js.

---
Read more about [styled-components](https://github.com/styled-components/styled-components).

## Features
Using next.js with react hook and redux.

---

## Coding Rule
create .eslintrc.js

---

## Redux and Redux-Saga

Using Redux manages status.
We call an action to change the status. However, in some complicated situations, we use redux-saga which is a middleware, for simplifying actions and reducers. With effects api listening action and acting some logics return a new result stored into redux saga.

[Redux-saga](https://github.com/redux-saga/redux-saga)

---
## Deploy

[heroku](https://taroko-demo.herokuapp.com/)

---
