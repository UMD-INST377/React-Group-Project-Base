## Installing Guide
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type `npm install` into terminal to install your `node_modules`.

## How to Use this Repo
### Development Build
Your development build only runs the frontend using the `src` and `public` folders.
While using the development build, your app will hot reload whenever you save a file.
**Your server will not be running on this build**
1. Run the development build with the command `npm run develop`
2. View the development build on localhost:3000

### Production Build
Your production build runs both the frontend and backend of your app using the `build` folder
However, it requires you to build your app in between changes.
1. Build your app with `npm run build`
2. Run the production build with `npm start`
3. View the production build on localhost:3000