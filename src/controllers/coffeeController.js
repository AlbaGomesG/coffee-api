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

const createCoffee = async (req, res) => {
    try {
        const {title, description, ingredients} = req.body;
        const image = req.file ? req.file.filename : null;
        const newCoffee = await coffeeModel.createCoffee(image, title, description, ingredients);
        res.status(201).json(newCoffee);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "Essa bebida já está cadastrada no nosso sistema"});
        }
        res.status(500).json({ error: "Erro ao criar bebida" });
    }
};

module.exports = { getAllCoffees, getCoffee, createCoffee };