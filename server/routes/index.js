import express from 'express';
import calculateRoutes from './calculate';


const app = express();

app.use('/tax', calculateRoutes);


export default app;
