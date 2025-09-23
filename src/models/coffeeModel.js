const pool = require("../config/database");

const getCoffees = async () => {
    const result = await pool.query("SELECT * FROM coffee");
    return result.rows;
};

module.exports = { getCoffees };