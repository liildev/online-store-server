const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  let { email, password } = req.body;

  function validateEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.url == "/registration") {
    if (![email, password].every(Boolean)) {
      return next(ApiError.badRequest("Требуется имя пользователя"));
    } else if (!validateEmail(email)) {
      return next(ApiError.badRequest("Неправильный адрес электронной почты"));
    }
  }

  if (req.url == "/login") {
    if (![email, password].every(Boolean)) {
      return next(ApiError.badRequest("Требуется имя пользователя"));
    } else if (!validateEmail(email)) {
      return next(ApiError.badRequest("Неправильный адрес электронной почты"));
    }
  }

  return next();
};
