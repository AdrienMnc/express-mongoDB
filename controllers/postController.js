const db = require("../lib/db");
const mongo = require("mongodb");

module.exports = {
  //POST /post : permettant de créer un post dans une collection posts (titre, contenu, nom de l’auteur, date du jour)
  async createPost(req, res) {
    const posts = await db
      .getDB()
      .collection("posts")
      .insertOne({
        title: req.body.title,
        content: req.body.content,
        authorName: req.body.authorName,
        date: new Date().toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
      });
    res.status(201).json(posts);
  },
  //   GET /posts : permettant de récupérer tous les posts
  async getAllPosts(req, res) {
    const posts = await db.getDB().collection("posts").find({}).toArray();
    res.status(200).json(posts);
  },
  //   GET /posts/:id : permettant de récupérer un post par son id
  async getPostById(req, res) {
    const posts = await db
      .getDB()
      .collection("posts")
      .findOne({ _id: new mongo.ObjectId(req.params.id) });
    res.status(200).json(posts);
  },
  //DELETE /post/:id : permettant de supprimer un post par son id
  async deletePostById(req, res) {
    const posts = await db
      .getDB()
      .collection("posts")
      .deleteOne({ _id: new mongo.ObjectId(req.params.id) });
    res.status(200).json(posts);
  },
};
