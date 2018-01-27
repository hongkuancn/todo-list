import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  item: {
    type: String
  },
  isEditing: {
    type: Boolean,
    default: false
  }
});

const Item = mongoose.model('item', ItemSchema);

export default Item;
