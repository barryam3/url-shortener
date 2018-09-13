# URL Shortener
A simple URL shortener. This is the main example for 6.170 Recitation 3 on Node and Express.

## Getting Started
1. Clone the repository.
2. `npm i` to install dependencies.
3. `npm start` to start the app.
4. Go to localhost:3000 in your browser.
5. You can create a short link. For example, you can use the name `google` and the url `https://google.com`.
6. Go to `localhost:3000/google` (or whatever name you chose) and see what happens!

## Challenges
1. Edit `public/javascripts/services.js` and make the following unimplemented functions send requests to the API. Once you do this, all of the short URL operations should work.
    - `listAll`
    - `updateOne`
    - `deleteOne`
2. Right now, the author field is always null. We can use sessions to keep track of the user's name to auto-populate the author field.
    1. Let's use [express-session](https://www.npmjs.com/package/express-session). Download it with `npm i -S express-session` and then add the middleware to `app.js`.
    2. Edit the signin route in `routes/users.js` to store the author name in the session.
    3. Edit `routes/shorts.js` to use the session to populate the author field.

## Notes
This app skeleton was created using [Express Generator](https://expressjs.com/en/starter/generator.html).
