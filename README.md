# Social App

[![Live Demo Link](https://img.shields.io/website?down_message=offline&label=demo&style=for-the-badge&up_message=online&url=https%3A%2F%2Fsocial-media-app-ui.netlify.app)](https://social-media-app-ui.netlify.app)

Simple social media app ui created with React and Material UI.

## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Acknowledgment](#acknowledgment)
- [License](#license)

## General Info

- I did this project to learn Material UI better, so I tried to use many components.
- I fetched the content (like posts, users, etc.) from [Unsplash API](https://unsplash.com/developers).
- I used [React Context](https://reactjs.org/docs/context.html) for state management.
- I added ligth/dark mode via [`CssBaseline`](https://mui.com/material-ui/react-css-baseline).
- Since this is a simple project, that is all. :))

## Technologies

- [Vite 3](https://vitejs.dev)
- [React 18](https://reactjs.org)
- [Material UI 5](https://mui.com)
- [Axios](https://axios-http.com)
- [Day.js](https://day.js.org)

## How To Use

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/realstankle/social-app.git

# Go into the repository
cd social-app

# Install dependencies
npm install
```

And create `.env` file in the root folder and add your unsplash access key into it:

```text
VITE_ACCESS_KEY=your_unsplash_access_key
```

Now, you can run the app:

```bash
npm run dev
```

## Acknowledgment

This project is based on [this tutorial](https://www.youtube.com/watch?v=fzxEECHnsvU) by [Lama Dev](https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg) youtube channel.

## License

[MIT](./LICENSE)
