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
