import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

mongoose.connect(
  "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/OrganicShopDB?retryWrites=true&w=majority",
  (err) => {
    if (!err) console.log("MongoDB connection succeeded.");
    else
      console.log(
        "Error in DB connection : " + JSON.stringify(err, undefined, 2)
      );
  }
);

app.listen(3000, () => console.log("Server started at port : 3000"));
