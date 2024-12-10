import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  items: [menuItemSchema],
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
