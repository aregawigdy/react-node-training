// const express = require('express');
// //const { Server } = require('socket.io');
// //const bodyParser = require('body-parser');
// //const routesHandler = require('./routes/handler.js');

// const app = express();
// //const helmet = require('helmet');
// const cors = require('cors');
// const authRouter = require('./routes/authRouter');
// // const session = require('express-session');
// const server = require('http').createServer(app);
// // require('dotenv').config();
// // const io = new Server(server, {
// //     cors:{
// //         origin: "http://localhost:3000",
// //         credentials: "true",
// //     },
// // });
// // app.use(helmet());
// // app.use(
// //     cors({
// //         origin: "http://localhost:3000",
// //         credentials: true,
// //     })
// // );
// app.use(cors());
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// // app.use(
// //     session({
// //         secret: process.env.COOKIE_SECRET,
// //         credentials: true,
// //         name: "sid",
// //         resave: false,
// //         saveUninitialized: false,
// //         cookie: {
// //             secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
// //             httpOnly: true,
// //             expires: 1000 * 60 * 60 * 24 * 1,
// //             sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
// //         },
// //     })
// // );
// app.use(authRouter);

// //io.on('connect', socket => {});

// server.listen(4000, () => {
//     console.log("Server listening on port 4000");
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const routesHandler = require('./routes/handler.js');
const authRouter = require('./routes/authRouter');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(authRouter);

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});