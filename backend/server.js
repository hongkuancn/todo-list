import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Item from './models/Item';

const app = express();
app.use(bodyParser.json());
const dbUrl = "mongodb://localhost/todolist";

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;

app.get('/api/list', (req, res, next) => {
  Item.find({}, (err, list) => {
    res.json({ list })
  }).catch(next)
})

app.post('/api/list', (req, res, next) => {
  Item.create(req.body).then((item) => {
    res.send(item)
  }).catch(next)
});

app.put('/api/li/save', (req, res, next) => {
  const id = req.body._id;
  const value = req.body.value;
  Item.findByIdAndUpdate({_id: id}, {item: value}, () => {
    Item.findOne({_id: id}, (err, item) => {
      res.json(item)
    })
  });
})

app.listen(8080, ()=>{
  console.log("Server is running on localhost:8080");
})
