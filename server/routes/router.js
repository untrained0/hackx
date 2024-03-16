const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");
const Userdb = require("../model/model");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);
route.get('/upload', services.upload);
route.get('/upload2', services.upload2);
 route.get('/upload3', services.upload3);
route.get('/upload4', services.upload4);


/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/Random", services.Random);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-user", services.update_user);

route.get("/login", services.login);

route.post("/login", async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;

    const useremail = await Userdb.findOne({ email: email });
    const passworduser = await Userdb.findOne({ password: password });
    console.log(useremail);

    if (password === passworduser) {
      res.status(201).redirect("Random");
    } else {
      res.render("ProfilePage");
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
