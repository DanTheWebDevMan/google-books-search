const router = require("express").Router();
const axios = require("axios");
const googleController = require("../../controllers/googleController");

router.route("/").get(googleController.findAll);

router.get("/recipes", (req, res) => {
    axios
        .get("http://www.recipepuppy.com/api/", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});
v

module.exports = router 