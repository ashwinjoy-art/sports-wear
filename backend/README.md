# created a folder backend
# created server.js file 
# npm init
# removed "test" from package.json
# packages installed for backend development
# npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
    package details
        
        1) cors: Middleware to allow Cross-Origin Resource Sharing, enabling your server to handle requests from different domains.
        2) dotenv: A package to load environment variables from a .env file, which keeps sensitive data like API keys and configuration out of your code.
        3) express: A web framework for Node.js, commonly used to build server-side applications, including APIs.
        4) jsonwebtoken (JWT): A library to create and verify JSON Web Tokens, often used for user authentication.
        5) mongoose: An ODM (Object Data Modeling) library for MongoDB, which helps in defining schemas and interacting with MongoDB databases.
        6) multer: Middleware for handling multipart/form-data, which is primarily used for uploading files.
        7) nodemon: A tool that automatically restarts your Node.js application when file changes are detected, useful during development.
        8) razorpay: A package to interact with the Razorpay payment gateway API, typically used for handling payments in applications (common in Indian e-commerce).
        9) stripe: A package to interact with the Stripe API, another popular payment gateway, commonly used in global e-commerce platforms.
       10) validator: A library used to validate and sanitize strings, like email addresses, URLs, and other data inputs.
       11) cloudinary: A cloud service for managing images and videos, including storage, transformation, and optimization, commonly used in e-commerce for media handling.
       12) bcrypt: A password-hashing function used to encrypt passwords before storing them in a database for added security.

# changed package.js
    added

        1) "server": "nodemon server.js" -- This script allows you to run the server.js file using Nodemon, which automatically restarts the server when file changes are detected.

            # npm start server

        2) "type": "module" -- By adding this, you've switched your Node.js project to use ECMAScript (ES) modules, which allows you to use import/export syntax instead of 
                                require/module.exports.

-> Refer More in Documentation

# npm start server

# API endpoint -> API endpoint refers to a specific URL (or path) on your server where it listens for requests and provides a  response.
    app.get('/',(req,res)=>{
        res.send("API Working")
    })

    # app.get('/', (req, res) => { ... }): This defines a route that listens for GET requests at the root URL '/'.
    # res.send("API Working"): When a request is received at this endpoint, it sends back the response "API Working" to the client.

# mongodb atlas
    create a project and a cluster in mongodb atlas
        when we create mongodb atlas don't give '@' simple in the password.
    select 512 mb free server and select aws
    select network in side panel and allow all ip address to access

# mongodb string"mongodb+srv://ashwinjoy:wBJm7h37OQJlH98y@cluster0.y4h2g.mongodb.net/"

# cloudinary 
    https://cloudinary.com/
    961449169725987
    https://console.cloudinary.com/settings/c-659aee1edf32c33b1c9b53d31827b4/api-keys