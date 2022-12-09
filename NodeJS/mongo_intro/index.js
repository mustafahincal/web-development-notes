const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//* connect DB
// mongoose.connect("mongodb://localhost/pcat-test-db");
// mongodb://127.0.0.1:27017/pcat-test-db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//* create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

//* model
const Photo = mongoose.model("Photo", PhotoSchema);

//* create a photo(document)
Photo.create({
  title: "Photo Title 1",
  description: "Photo Description 1",
});

//* read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});

//* update a photo
const photo_id_to_update = "607131312abc";
Photo.findByIdAndUpdate(
  photo_id_to_update,
  {
    title: "Photo Title 1 Updated",
    description: "Photo Description 1 Updated",
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
);

//* delete a photo
const photo_id_to_remove = "607131312abc";
Photo.findByIdAndDelete(photo_id_to_remove, (err, data) => {
  console.log("Photo is removed");
});
