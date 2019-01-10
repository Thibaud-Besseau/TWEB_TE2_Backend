// Import movie
import User from "../models/User";

const bcrypt = require('bcrypt');



// Handle create contact actions
exports.new = function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;

    user.password=bcrypt.hashSync(req.body.password, 10);


    // save the contact and check for errors
    user.save(function (err) {
        if (err)
            res.status(500).send({ error: err });
        else {
            res.status(201).send({ message: 'New contact created!' });
        }
    });
};

