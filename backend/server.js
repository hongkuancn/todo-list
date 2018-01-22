import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import List from './models/list';

const app = express();
app.use(bodyParser.json());
const dbUrl = "mongodb://localhost/todolist";

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;

app.post('/', (req, res, next) => {
  List.create(req.body).then((item) => {
    res.send(item)
  }).catch(next)
});

app.listen(8080, ()=>{
  console.log("Server is running on localhost:8080");
})
