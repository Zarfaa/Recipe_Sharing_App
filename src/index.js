import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from 'mongoose';
import RecipesRouter from "./Routes/MongoRoutes/RecipeRouter.js"
import AuthRouter from "./Routes/MongoRoutes/AuthRouter.js"
import AdminRouter from "./Routes/MongoRoutes/AdminRouter.js";
import UserRouter from "./Routes/MongoRoutes/UserRouter.js";
import verifyAccessToken from "./Middleware/VerifyAccessToken.js"
import Recipe from "./Routes/PostgresRoutes/RecipeRouter.js";
import Auth from "./Routes/PostgresRoutes/AuthRouter.js"
import Admin from "./Routes/PostgresRoutes/AdminRouter.js";
import User from "./Routes/PostgresRoutes/UserRouter.js";
import { PrismaClient } from '@prisma/client';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from './Utils/Api_documentation.json' assert { type: 'json' };

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use("/api/auth", Auth)
app.use("/api/admin", Admin)
app.use(verifyAccessToken)
app.use("/api/recipe", Recipe )
app.use("/api/user", User)

app.use("/auth", AuthRouter)
app.use("/admin", AdminRouter)
app.use(verifyAccessToken)
app.use("/user", UserRouter)
app.use("/recipe", RecipesRouter )

const port = process.env.PORT || 3000;
const databaseType = process.env.DATABASE_TYPE.toUpperCase();


const prisma = new PrismaClient();

if (databaseType === 'MONGODB') {
  const url = process.env.MONGO_URL;
  mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB');
    startServer();
  }).catch(error => {
    console.error("Mongoose Error", error);
  });
} else if (databaseType === 'POSTGRESQL') {
  prisma.$connect().then(() => {
    console.log('Connected to PostgreSQL');
    startServer();
  }).catch(error => {
    console.error('Unable to connect to the database:', error);
  });
} else {
  console.error('Invalid database type specified in the configuration.');
}

function startServer() {
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
}

export { prisma };
