const UserModel = require("./user.model");

class UserService {
  static async getUserById(id) {
    return UserModel.findById(id);
  }

  static async getUserByUsername(username) {
    return UserModel.findOne({ username });
  }

  static async getUserByEmail(email) {
    return UserModel.findOne({ email });
  }

  static async createUser(username, email, password) {
    return UserModel.create({ username, email, password });
  }
}

module.exports = UserService;
