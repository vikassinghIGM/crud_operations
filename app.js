import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
//import Product from './models/model.js'
import ProductRoute from './routes/route.js'

 import "dotenv/config"


//express 
const app = express()

//middlewar
app.use(express.json())
app.use(morgan('tiny'));

//routes
app.use('/products', ProductRoute)

// mongoose.connect('mongodb+srv://vikas:Runt8xWDL$eh3eV@clusterr.xshbinh.mongodb.net/CRUD-operation?retryWrites=true&w=majority')

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('Connected to DB!'));

app.listen(process.env.ROUTE , () => {
  console.log(`listeninig to the 8080`);
});