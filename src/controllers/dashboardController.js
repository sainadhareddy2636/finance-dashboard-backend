const Record = require("../models/Record");

exports.summary = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json({
    income: income[0]?.total || 0,
    expense: expense[0]?.total || 0,
    balance: (income[0]?.total || 0) - (expense[0]?.total || 0)
  });
};