import swaggerAutogen from 'swagger-autogen';
import dotenv from "dotenv";

dotenv.config();

const doc = {
  info: {
    title: 'Recipe Sharing App',
    description: 'Backend for Recipe Sharing App including CRUD and JWT authentication'
  },
  host: `localhost:${process.env.PORT}`,
  components: {
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
        }
    }
}
};

const outputFile = './Api_documentation.json';
const endpointsFiles = ['src/index.js' ];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);