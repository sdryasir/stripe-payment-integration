import express from 'express';
import TodoRoutes from './routes/todo.routes.js';
import UserRoutes from './routes/user.routes.js';
import PaymentRoutes from './routes/payment.routes.js';
import { connectDB } from './config/config.js';
import bodyParser from 'body-parser';
const app = express();



connectDB();
app.use(bodyParser());
app.use('/api', TodoRoutes) //middleware
app.use('/api', UserRoutes) //middleware
app.use('/api', PaymentRoutes) //middleware


app.listen(9000, ()=>{
    console.log('Server is running on port 9000')
})







