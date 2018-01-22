import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  item: {
    type: String,
    required: [true, 'Name field is required']
  },
  hasDone: {
    type: Boolean,
    default: false
  }
});

const List = mongoose.model('list', ListSchema);

export default List;
