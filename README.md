## Welcome to the front end of The Book Club Avengers

## Overview

Reading books does not have to be a lonely affair! With book avengers, you can create and join book clubs in order to connect with people with similar book interests. 

## Features 

Users can sign up, see their profile, create new book clubs, see the book clubs that are available, join a book club, see which clubs they belong to, edit their book clubs, and leave a club. 

## How to run the project on your own machine

You will need to 
1. clone our frontend repo: https://github.com/The-Book-Club-Avengers/bookclub-frontend.git
2. clone our backend repo: https://github.com/The-Book-Club-Avengers/bookclub-backend.git
3. install the frontend dependencies: 
    $ yarn add react-router-dom
    $ yarn add bootstrap
    $ yarn add reactstrap
    Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
4. install the backend dependencies and create a database: 
    $ bundle add devise 
    $ rails db:drop
    $ rails db:setup 
5. Start the rails server first on localhost:3000 and then $yarn start to start the react server on localhost:3001

## Dependencies

The dependencies we used for this project were the following: 

    Backend:
        JWT and Devise 
    Frontend:
        react router dom, reactstrap and bootstrap 

## Link to live site

https://bookclub-frontend.onrender.com/

## Creators 
    Alejandra Hale
    Dre Lopez Delgado 
    Xena Sitnikova