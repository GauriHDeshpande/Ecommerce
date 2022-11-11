
const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];  // Get access to the token pass by the user.
    if(!token){  // If no token passed by the user, throw error.
        console.log('In authjwt middelware')
        return res.status(403).send({
            message : "No token provided !"
        });
    }
    // Do verification of the token
    jwt.verify(token, config.secret, (err, decoded) =>{
        if(err){
            return res.status(401).send({
                message: "Unauthorised !"
            })
        }
        console.log("Decoded");
        console.log(decoded);
        req.userId = decoded.id;
        next();
    })
}

// Check whether the user who hit the API is Admin or not.
isAdmin = (req, res, next) => {
    User.findByPk(req.userId)
    .then(user => {
        console.log("Usersssss");
        console.log(user);
        user.getRoles()  // user_roles
        // select * from user_roles where userId = req.userId
        .then(roles => {
            console.log('can not execute this getRoles')
            for(let i=0; i < roles.length; i++){
                if(roles[i].name === "admin"){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Required Admin Role"
            });
            return;
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};

module.exports = authJwt;