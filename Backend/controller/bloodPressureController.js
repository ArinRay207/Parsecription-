import bpModel from '../model/bloodPressure.model.js'

export const addBPDataController = async (req, res) => {
    try {
        const { systolic, diastolic } = req.body;
        // console.log(req.body);
        if (!systolic || !diastolic) {
            return res.status(404).send({
                success: false,
                message: "Invalid value"
            });
        }

        const bp = new bpModel({
            user: req.user._id,
            val0: systolic,
            val1: diastolic
        });

        bp.save();

        res.status(201).send({
            success: true,
            message: 'Blood Pressure added successfully',
            bp: bp
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

export const getBPDataController = async (req, res) => {
    try {
        const bpData = await bpModel.find({user: req.user._id});
        // console.log("BP Data->",bpData);
        res.status(200).send({
            success: true,
            message: "Sucessfully got all notes",
            bpData,
            total_count: bpData.length
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