const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('RANDOM', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

exports.add_user = (req, res) => {
    res.render('add_user');
}
exports.upload = (req, res) => {
    res.render('upload');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}

