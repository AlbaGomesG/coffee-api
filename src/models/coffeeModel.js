const pool = require("../config/database");

const getCoffees = async () => {
    const result = await pool.query("SELECT * FROM coffee");
    return result.rows;
};

const getCoffeeById = async (id) => {
    const result = await pool.query("SELECT * FROM coffee WHERE id = $1", [id]);
    return result.rows[0];
};

const createCoffee = async (image, title, description, ingredients) => {
    const result = await pool.query("INSERT INTO coffee (image, title, description, ingredients) VALUES ($1, $2, $3, $4) RETURNING *", [image, title, description, ingredients]);
    return result.rows[0];
};

const updateCoffee = async (id,  title, description, ingredients) => {
    const result = await pool.query("UPDATE coffee SET title = $1, description = $2, ingredients = $3 WHERE id = $4 RETURNING *", [title, description, ingredients, id]);
    return result.rows[0];
};

module.exports = { getCoffees, getCoffeeById, createCoffee, updateCoffee };