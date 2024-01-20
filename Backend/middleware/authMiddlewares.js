import JWT from 'jsonwebtoken';
import userModel from '../model/user.model.js';

export const requireSignIn = async(req, res, next) => {
    try {
        console.log("AAAAAAAAA" , req.headers.authorization);
        const decode = JWT.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET
        );
        req.user = decode;
        console.log("User-->",req.user);
        next();       
    } catch(error) {
        console.log("Error", error);

        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized access'
            })
        } else {
            next();
        }
    } catch (error) {
        console.log("Error", error);
    }
};