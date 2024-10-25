const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserService = require('../user/user.service');

class AuthService {
  static async getUserData(token) {
    const { id } = await jwt.verify(token, process.env.JWT_SECRET);

    return UserService.getUserById(id);
  }

  static async signIn({ email, password }) {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      return {
        success: false,
        message: "User with this email does not exist",
        data: user,
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { success: false, message: "Wrong password", data: user };
    }

    return { success: true, message: "", data: user };
  }

  static generateAccessToken(userId) {
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    return accessToken;
  }
}

module.exports = AuthService;