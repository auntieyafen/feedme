// require('dotenv').config();
import dotenv from "dotenv-defaults";
dotenv.config();
import db from './Model';
import oauthRoutes from './Routes/oauthRoutes';
import userRoutes from './Routes/userRoutes';
import dataRoutes from './Routes/dataRoutes';
import generalRoutes from './Routes/generalRoutes';
import recipeRoutes from './Routes/recipeRoutes';

console.log("dotenv = ", process.env.PORT)
const PORT = process.env.PORT || 8000

import express, { json, urlencoded } from "express";
const app = express();
import cors from 'cors';
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));


app.use(json());
app.use(urlencoded());

app.use('/api/oauth', oauthRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/user', userRoutes);
app.use('/api/general', generalRoutes);
app.use('/api/recipe', recipeRoutes);

db.sequelize.sync({ alter: true }).then(() => {    //drop table if exists
    console.log("db has been sync")
})

// db.sequelize.sync().then(() => {    //drop table if exists
//   console.log("db has been sync")
// })


app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})

// const httpServer = http.createServer(app);
// httpServer.listen(PORT, () => {
//   console.log(`🚀 Server Ready at ${PORT}! 🚀`)
// });
