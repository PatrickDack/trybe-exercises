const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pagequantity: DataTypes.STRING,
  });

  return Book;
};

module.exports = Book;