import express from "express";
import mongoose from "mongoose";
import Product from "../model/product.js";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  Product.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Products :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

productRouter.get("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Product.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Product :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

productRouter.post("/", (req, res) => {
  let product = new Product({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    imgUrl: req.body.imgUrl,
  });
  product.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Product Save :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

productRouter.put("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  let product = {
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    imgUrl: req.body.imgUrl,
  };

  Product.findByIdAndUpdate(
    req.params.id,
    { $set: product },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Product Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

export default productRouter;
