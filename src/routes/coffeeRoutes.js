const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

router.get("/coffees", coffeeController.getAllCoffees);
router.get("/coffees/:id", coffeeController.getCoffee);

module.exports = router;