import bsModel from '../model/bloodSugar.model.js'

export const addBSDataController = async (req, res) => {
    try {
        const { pp, fasting } = req.body;
        
        if (!pp || !fasting) {
            return res.status(404).send({
                success: false,
                message: "Invalid value"
            });
        }

        const bs = new bsModel({
            user: req.user._id,
            val0: pp,
            val1: fasting
        });

        bs.save();

        res.status(201).send({
            success: true,
            message: 'Blood Pressure added successfully',
            bs: bs
        });


    } catch(err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in login",
            err
        })
    }
}

export const getBSDataController = async (req, res) => {
    try {
        const bsData = await bsModel.find({user: req.user._id});
        res.status(200).send({
            success: true,
            message: "Sucessfully got all notes",
            bsData,
            total_count: bsData.length
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting notes",
            error
        })
    }
}