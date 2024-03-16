const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('ProfilePage', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

exports.Random = (req, res) => {
    res.render('Random');
}

exports.upload = (req, res) => {
    res.render('upload');
}
exports.login = (req, res) => {
    res.render('login');
}
// exports.login = async (req, res) => {
//     try {
//         const password = req.body.password;
//         const email = req.body.email;
    
//         const useremail = await Userdb.findOne({ email: email });
//         const passworduser = await Userdb.findOne({ password: password });
        
//         console.log(useremail);
//         if (password === passworduser) {
//           res.status(201).redirect("ProfilePage");
//         } else {
//           res.render("Random");
//         }
//       } catch (error) {
//         res.status(400).send(error);
//         console.log(error);
//       }
// }




exports.upload2 = (req, res) => {
    res.render('upload2');
}

exports.upload3 = (req, res) => {
    res.render('upload3');
}

exports.upload4 = (req, res) => {
    res.render('upload4');
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

