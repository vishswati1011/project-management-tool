const jwt = require('jsonwebtoken');
const { TokenExpiredError } = jwt;
const Users = require('../models/user');

const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: 'Unauthorized! Access Token was expired!' });
    }

    return res.sendStatus(401).send({ message: 'Unauthorized!' });
};

verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: 'No token provided' });
    } else {
        jwt.verify(token, process.env.SALT, (err, decoded) => {
            if (err) {
                return catchError(err, res);
            }
            Users.findById(decoded?._id)
                .then(user => {

                    if (!user) {
                        res.status(401).json({ message: 'Unauthorized, User not found' });
                    } else {
                        req.userId = decoded?._id;
                        req.organizationId = decoded?.organizationId?._id;
                        req.email = decoded?.userId?.email;
                        req.name = decoded?.userId?.username
                        next();
                    }
                })
                .catch(error => {
                    res.status(400).json({ message: error.message });
                });
        });
    }
};


const authJwt = {
    verifyToken
};

module.exports = authJwt;
