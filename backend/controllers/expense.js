const expenseSchema = require("../models/expenseModels");

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, description, date } = req.body;
    const expense = expenseSchema({
      title,
      amount,
      category,
      description,
      date,
    });
    if (!title || !category || !description || !date) {
      return res.status(400).send({
        status: 400,
        msg: "All fields are mandatory!",
      });
    }
    if (amount < 0 || !amount === "number") {
      return res.status(400).send({
        status: 400,
        msg: "Amount must be a number.",
      });
    } else {
      let data = await expense.save();
      res.send({
        status: 200,
        msg: "Expense added successfully!",
        data: data,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      status: 500,
      msg: "Internal Server Error!",
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    let data = await expenseSchema.find().sort({ createdAt: -1 });
    res.send({
      status: 200,
      msg: "Expense listed successfully!",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 500,
      msg: "Internal Server Error!",
    });
  }
};

exports.deleteExpense = async (req, res) => {
    try {
      let {id} = req.params;
      let data = await expenseSchema.findByIdAndDelete().then((expense)=>{

      });
      res.send({
        status: 200,
        msg: "Expense deleted successfully!",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.send({
        status: 500,
        msg: "Internal Server Error!",
      });
    }
  };
