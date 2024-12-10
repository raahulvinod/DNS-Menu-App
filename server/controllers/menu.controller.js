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
