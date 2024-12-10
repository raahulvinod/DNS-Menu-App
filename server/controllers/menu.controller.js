import Menu from '../model/menu.model.js';

export const createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;

    const menu = await Menu.create({ name, description, items: [] });
    res.status(201).json(menu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addItemToMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const menu = await Menu.findByIdAndUpdate(
      id,
      { $push: { items: { name, description, price } } },
      { new: true }
    );

    if (!menu) throw new Error('Menu not found');

    res.status(200).json(menu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const menu = await Menu.findById(id);
    if (!menu) throw new Error('Menu not found');

    res.status(200).json(menu);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
