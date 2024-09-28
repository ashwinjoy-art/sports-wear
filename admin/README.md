# npm create vite@latest .
# React
# Javascript
# npm install (install all dependencies) (create node_models)
# npm install axios react-router-dom react-toastify

    axios: A promise-based HTTP client for making API requests.
    react-router-dom: A package used for handling routing in React applications, allowing for the creation of multi-page SPAs.
    react-toastify: A library used to show toast notifications in a React app.
        [Toast notifications are small, non-intrusive popup messages that appear on a user interface to provide feedback or information. They are typically used for:
        1) Success Messages: To inform users when an operation (like submitting a form or saving data) has been successfully completed.
        2) Error Alerts: To notify users of an issue, such as a failed API request or validation error.
        3) Warnings or Info: To give important messages or updates, like system alerts or tips.]

# https://tailwindcss.com/docs/guides/vite
    - site for installing tailwindcss packages to the project
# npm install -D tailwindcss postcss autoprefixer 
# npx tailwindcss init -p
    (to provide the support of tailwind css)
# add below code to tailwind.config.js file
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

# add below code to index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

