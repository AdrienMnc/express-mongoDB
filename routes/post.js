const express = require("express");
const router = express.Router();

// import controllers here
const postController = require("../controllers/postController");

// define routes here
router.post("/", postController.createPost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.delete("/:id", postController.deletePostById);

module.exports = router;
