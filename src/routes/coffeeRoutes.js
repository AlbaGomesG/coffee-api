const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");
const upload = require("../config/upload.js");

router.get("/coffees", coffeeController.getAllCoffees);
router.get("/coffees/:id", coffeeController.getCoffee);
router.post("/coffees", upload.single("image"), coffeeController.createCoffee);
router.put("/coffees/:id", coffeeController.updateCoffee);
router.delete("/coffees/:id", coffeeController.deleteCoffee);

module.exports = router;