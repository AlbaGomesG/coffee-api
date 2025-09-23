const pool = require("../config/database");

const getCoffees = async () => {
    const result = await pool.query("SELECT * FROM coffee");
    return result.rows;
};

const getCoffeeById = async (id) => {
    const result = await pool.query("SELECT * FROM coffee WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getCoffees, getCoffeeById };