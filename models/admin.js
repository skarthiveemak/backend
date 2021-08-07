const db = require('../util/database');

module.exports = class admin {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM admin');
   // return db.execute('call uselistname()');
  }

  static find(email) {
    return db.execute('SELECT * FROM admin WHERE email = ?', [email]);
  }

   static save(user) {
     return db.execute(
       'INSERT INTO admin (name, email, password) VALUES (?, ?, ?)',
       [user.name, user.email, user.password]
     );
   }
};
