const db = require("../util/database");

module.exports = class Post {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM post");
  }

  static save(post) {
    return db.execute("INSERT INTO post (title, body, user) VALUES (?, ?, ?)", [
      post.title,
      post.body,
      post.user,
    ]);
  }

  static delete(id) {
    return db.execute("DELETE FROM post WHERE id = ?", [id]);
  }

  static update(id,title,body,user) {
    return db.execute("UPDATE post SET title=?, body=?, user=? WHERE id=?", 
    [
      title,
      body,
      user,
      id,
    ]);
  }
};
