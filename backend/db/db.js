// const mongoose = require("mongoose");

// const db = async () => {
//   try {
//     let res = await mongoose.connect(process.env.MONGO_URL);
//     console.log("DB connected", res);
//   } catch (error) {
//     console.log("DB not connected", error);
//   }
// };

// const db = mongoose.connect(
//   "mongodb://localhost:27017/expense",
//   {
//     useNewUrlParser: true,
//   },
//   (err) => {
//     if (!err) {
//       console.log("Connected");
//     } else {
//       console.log("Error");
//     }
//   }
// );

// module.exports = { db };
