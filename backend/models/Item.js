import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  item: {
    type: String
  },
  hasDone: {
    type: Boolean,
    default: false
  },
  isEditing: {
    type: Boolean,
    default: false
  }
});

const Item = mongoose.model('item', ItemSchema);

export default Item;
