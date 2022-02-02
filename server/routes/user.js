import express from "express";
import mongoose from "mongoose";
import User from "../model/user.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  User.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Users :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

userRouter.get("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  User.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving User :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

userRouter.post("/", (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
  });
  user.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in User Save :" + JSON.stringify(err, undefined, 2));
    }
  });
});

export default userRouter;
