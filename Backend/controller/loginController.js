import { comparePassword, hashPassword } from "../Util/authHelper.js";
import userModel from "../model/user.model.js";
import JWT from 'jsonwebtoken';

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }
        
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email not registered"
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,                
                message: "Invalid password"
            });
        }

        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: 'login successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                gender: user.gender,
                age: user.age,
            },
            token
        })
    } catch(err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in login",
            err
        })
    }
}

export const signupController = async (req, res) => {
    try{
        const {name, age, gender, email, phone, password} = req.body;
        // console.log(req);

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already regitered, please login"
            });
        }

        const hashedPassword = await hashPassword(password); 

        const user = new userModel({
            name: name,
            age: age,
            gender: gender,
            email: email,
            password: hashedPassword,
            phone: phone,
        });

        user.save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user: user
        });

    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in registration",
            error
        })
    }
}