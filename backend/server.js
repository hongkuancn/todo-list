import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Item from './models/Item';
import path from 'path';

const app = express();
app.use(bodyParser.json());

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../build'))
// pass the static files (react app) to the express app.
app.use(staticFiles)

const dbUrl = "mongodb://user:user123@ds217138.mlab.com:17138/todolist";

mongoose.connect(dbUrl);
mongoose.Promise = global.Promise;

app.get('/api/list', (req, res, next) => {
  Item.find({}, (err, list) => {
    res.json({ list })
  }).catch(next)
})

app.post('/api/li/create', (req, res, next) => {
  Item.create(req.body).then((item) => {
    res.send(item)
  }).catch(next)
});

app.put('/api/li/save', (req, res) => {
  const id = req.body._id;
  const value = req.body.value;
  Item.findByIdAndUpdate({_id: id}, {item: value}, () => {
    Item.findOne({_id: id}, (err, item) => {
      res.json(item)
    })
  });
});

app.delete('/api/li/delete', (req, res) => {
  const id = req.body._id;
  Item.findOneAndRemove({_id: id}, (err, item) => {
      res.json(item)
  });
})

app.use((req, res) => {
  res.status(404).json({
    errors: {
      global: "Still working on it. Please try it later when we implement it"
    }
  })
})

app.listen(process.env.PORT || 8080, ()=>{
  console.log("Server is running on localhost:8080");
})
