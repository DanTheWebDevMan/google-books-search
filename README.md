# Google-Books-Search

In this activity, you'll create a new React-based Google Books Search app. This assignment requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. You'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

## Techonologies used
- express
- react
- mongodb
- axios
- npm

Please note: the app works to an extent but is not fully functional. 

Had issues with rendering of objects onto page. The call to Google API worked, just not fully. If you check console, the obnjects display.

Had issues setting up Heroku

Home page
![GitHub Logo](/images/home.jpg)


Results page- Search item shows up in console, not on page
![GitHub Logo](/images/results.jpg)


If there's no match in Google Books API
![GitHub Logo](/images/noResults.jpg)





# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.


