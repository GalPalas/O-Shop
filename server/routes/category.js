import express from "express";
import data from "../data.js";
import Category from "../model/category.js";

const categoryRouter = express.Router();

categoryRouter.get("/seed", (req, res) => {
  // await Product.remove({});
  Category.insertMany(data.categories, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in insertion categories :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

categoryRouter.get("/", (req, res) => {
  Category.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Categories :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

export default categoryRouter;
