const express = require("express");
const router = express.Router();
const transactionsControllers = require("../controllers/income");

router.post("/addIncome", transactionsControllers.addIncome);

router.get("/getIncomes", transactionsControllers.getIncomes);

router.delete("/deleteIncome/:id", transactionsControllers.deleteIncome);

module.exports = router;