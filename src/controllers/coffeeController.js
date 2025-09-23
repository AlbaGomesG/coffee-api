const coffeeModel = require("../models/coffeeModel");

const getAllCoffees = async (req, res) => {
    try {
        const coffees = await coffeeModel.getCoffees();
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar bebidas" });
    }
};

const getCoffee = async (req, res) => {
    try {
        const coffee = await coffeeModel.getCoffeeById(req.params.id);
        if (!coffee) {
            return res.status(404).json({ error: "Bebida não encontrada" });
        }
        res.json(coffee);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar bebida" });
    }
};

module.exports = { getAllCoffees, getCoffee };