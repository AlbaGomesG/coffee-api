const coffeeModel = require("../models/coffeeModel");

const getAllCoffees = async (req, res) => {
    try {
        const coffees = await coffeeModel.getCoffees();
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar bebidas" });
    }
}

module.exports = { getAllCoffees };