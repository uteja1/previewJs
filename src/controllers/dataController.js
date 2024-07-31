const Data = require('../models/Data');

exports.getData = async (req, res) => {
  try {
    // const data = await Data.find();
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
      ];
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};