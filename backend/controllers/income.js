const incomeSchema = require("../models/incomeModels");

exports.addIncome = async (req, res) => {
  try {
    const { title, amount, category, description, date } = req.body;
    const income = incomeSchema({
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
      let data = await income.save();
      res.send({
        status: 200,
        msg: "Income added successfully!",
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

exports.getIncomes = async (req, res) => {
  try {
    let data = await incomeSchema.find().sort({ createdAt: -1 });
    res.send({
      status: 200,
      msg: "Income listed successfully!",
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

exports.deleteIncome = async (req, res) => {
    try {
      let {id} = req.params;
      let data = await incomeSchema.findByIdAndDelete().then((income)=>{

      });
      res.send({
        status: 200,
        msg: "Income deleted successfully!",
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
