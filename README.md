## Welcome to the front end of The Book Club Avengers

## React Setup 
$ yarn create react-app apartment-app-frontend
$ cd apartment-app-frontend
$ yarn add react-router-dom
$ yarn add bootstrap
$ yarn add reactstrap
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
$ yarn start
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
Ask your instructors for branch protection
To enable routing in our application we need to add the BrowserRouter component to index.js. The BrowserRouter component will get imported from the React Router library. Then BrowserRouter tags will wrap the App.js component invocation

## Mock Users Mock Membership and Mock Book Clubs 
When creating mock data in React, it is important to include the primary keys as well as the foreign keys that belong to each data instance in the Rails API.

We can create two mock files: one for users and one for apartments.

User passwords can be excluded from the mock data since Devise will ensure they are not available to view.

Both of these files can be imported to App.js and set in state. Only one user will be logged into the application at a time, so we can reference one user from the users array when setting the initial value in state.

Mock membership: Will have an id and two foreign keys, one for the user and one for the book club. 

## React file structure
Created all the files and folders for the app as well as a tests file for our test. 

Used routes and route from browser router as component calls for all the files in App.js 

## Header and Footer 

Used a tags to make names hyperlinks to our linked in pages and styled the footer in CSS to appear at the bottom of the page and centered. 

Header: used dropdown menu resources from react strap and react router dom to create a dropdown menu and styled each element in CSS, each element has a className to be able to be styled in CSS. Also used protected pages from the syllabus: https://github.com/learn-academy-2023-foxtrot/syllabus/blob/main/apartment-app/frontend/protected.md
to make sure the dropdown menu is different when a user is logged in. Set state of logged in to false initially, will work on handleLogout in the signin sign out branch. 


## Sign up and connecting it to Rails

1. Changed the currentUser state variable to null and the bookclub state variable to an empty array 
2. created the form for the signup page that in this case is called NewAccount

# Home
To include images in the home page I had to use an image tag with inline styling, then for the arrow animation I used w3 schools: 
https://www.w3schools.com/howto/howto_css_shake_image.asp
For the text I used simple heading and paragraph tags and breaks so that they would be spaced out. Then, I used an a tag for the JOIN TODAY text to take the user to the new account page. 


# removed from useEffect maybe for later use

  
  // setMembershipsLoading(true);
  // fetch(`${url}/memberships`)
  //   .then(response => response.json())
  //   .then(payload => {
  //     setMemberships(payload);
  //     setMembershipsLoading(false);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     setMembershipsLoading(false);
  //   });

  // // Fetch book clubs
  // setBookClubsLoading(true);
  // fetch(`${url}/clubs`)
  //   .then(response => response.json())
  //   .then(payload => {
  //     setBookClubs(payload);
  //     setBookClubsLoading(false);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     setBookClubsLoading(false);
  //   });
